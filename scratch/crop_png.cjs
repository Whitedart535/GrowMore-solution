const fs = require('fs');
const zlib = require('zlib');

function paeth(a, b, c) {
  const p = a + b - c;
  const pa = Math.abs(p - a);
  const pb = Math.abs(p - b);
  const pc = Math.abs(p - c);
  if (pa <= pb && pa <= pc) return a;
  if (pb <= pc) return b;
  return c;
}

function processPng(inputPath, outputPath) {
  const buf = fs.readFileSync(inputPath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);

  let pos = 8;
  const idatChunks = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (type === 'IDAT') {
      idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
    }
    pos += 12 + len;
  }

  const compressed = Buffer.concat(idatChunks);
  const decompressed = zlib.inflateSync(compressed);

  const bpp = 4;
  const stride = width * bpp;
  const unfiltered = Buffer.alloc(height * stride);

  let srcPos = 0;
  for (let y = 0; y < height; y++) {
    const filter = decompressed[srcPos++];
    const rowStart = y * stride;
    const prevRowStart = (y - 1) * stride;

    for (let x = 0; x < stride; x++) {
      const raw = decompressed[srcPos++];
      const a = x >= bpp ? unfiltered[rowStart + x - bpp] : 0;
      const b = y > 0 ? unfiltered[prevRowStart + x] : 0;
      const c = (y > 0 && x >= bpp) ? unfiltered[prevRowStart + x - bpp] : 0;

      let val = 0;
      if (filter === 0) val = raw;
      else if (filter === 1) val = (raw + a) & 0xFF;
      else if (filter === 2) val = (raw + b) & 0xFF;
      else if (filter === 3) val = (raw + Math.floor((a + b) / 2)) & 0xFF;
      else if (filter === 4) val = (raw + paeth(a, b, c)) & 0xFF;

      unfiltered[rowStart + x] = val;
    }
  }

  // Find bounding box of non-white pixels
  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = unfiltered[idx];
      const g = unfiltered[idx + 1];
      const b = unfiltered[idx + 2];
      const a = unfiltered[idx + 3];

      // Non-white pixel
      const isWhite = (r > 240 && g > 240 && b > 240);
      if (!isWhite && a > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log('Artwork Bounding Box:', { minX, maxX, minY, maxY });
  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  console.log(`Cropped dimensions: ${cropW} x ${cropH} (Original: ${width} x ${height})`);

  const cropped = Buffer.alloc(cropH * (1 + cropW * 4));
  for (let y = 0; y < cropH; y++) {
    const srcY = minY + y;
    const rowStart = y * (1 + cropW * 4);
    cropped[rowStart] = 0; // Filter 0

    for (let x = 0; x < cropW; x++) {
      const srcX = minX + x;
      const srcIdx = (srcY * width + srcX) * 4;
      const destIdx = rowStart + 1 + x * 4;

      const r = unfiltered[srcIdx];
      const g = unfiltered[srcIdx + 1];
      const b = unfiltered[srcIdx + 2];
      const a = unfiltered[srcIdx + 3];

      const isWhite = (r > 242 && g > 242 && b > 242);
      if (isWhite) {
        cropped[destIdx] = 255;
        cropped[destIdx + 1] = 255;
        cropped[destIdx + 2] = 255;
        cropped[destIdx + 3] = 0; // Transparent
      } else {
        cropped[destIdx] = r;
        cropped[destIdx + 1] = g;
        cropped[destIdx + 2] = b;
        cropped[destIdx + 3] = a;
      }
    }
  }

  const deflated = zlib.deflateSync(cropped);

  const parts = [];
  parts.push(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(cropW, 0);
  ihdr.writeUInt32BE(cropH, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  parts.push(createChunk('IHDR', ihdr));
  parts.push(createChunk('IDAT', deflated));
  parts.push(createChunk('IEND', Buffer.alloc(0)));

  const finalPng = Buffer.concat(parts);
  fs.writeFileSync(outputPath, finalPng);
  console.log('Successfully saved transparent cropped PNG to:', outputPath);
}

function createChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(8 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const crc = crc32(buf.slice(4, 8 + len));
  buf.writeInt32BE(crc, 8 + len);
  return buf;
}

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    let byte = buf[i];
    for (let j = 0; j < 8; j++) {
      let bit = (byte ^ crc) & 1;
      crc = (crc >>> 1) ^ (bit ? 0xEDB88320 : 0);
      byte >>>= 1;
    }
  }
  return crc ^ -1;
}

const input = 'C:\\Users\\swath\\.gemini\\antigravity-ide\\brain\\f9ba1f11-1d64-49f4-b334-0402b5f08a3a\\.user_uploaded\\media_1787665003336.png';
processPng(input, 'public/logo.png');
processPng(input, 'src/assets/logo.png');
