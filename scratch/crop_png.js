const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function processPng(inputPath, outputPath) {
  const buf = fs.readFileSync(inputPath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);

  // Extract all IDAT chunks
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

  // Scanlines: each row starts with filter byte (0)
  const bytesPerPixel = 4;
  const rowBytes = 1 + width * bytesPerPixel;
  const pixels = Buffer.alloc(width * height * 4);

  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    const filter = decompressed[rowOffset]; // Assume 0 or handles filter 0
    for (let x = 0; x < width; x++) {
      const srcIdx = rowOffset + 1 + x * 4;
      const r = decompressed[srcIdx];
      const g = decompressed[srcIdx + 1];
      const b = decompressed[srcIdx + 2];
      const a = decompressed[srcIdx + 3];

      const destIdx = (y * width + x) * 4;
      pixels[destIdx] = r;
      pixels[destIdx + 1] = g;
      pixels[destIdx + 2] = b;
      pixels[destIdx + 3] = a;

      // Check if not pure white/transparent background
      const isWhite = (r > 248 && g > 248 && b > 248);
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

  // Create cropped raw image buffer with transparent background where pure white was
  const cropped = Buffer.alloc(cropH * (1 + cropW * 4));
  for (let y = 0; y < cropH; y++) {
    const srcY = minY + y;
    const rowStart = y * (1 + cropW * 4);
    cropped[rowStart] = 0; // Filter byte none

    for (let x = 0; x < cropW; x++) {
      const srcX = minX + x;
      const srcIdx = (srcY * width + srcX) * 4;
      const destIdx = rowStart + 1 + x * 4;

      const r = pixels[srcIdx];
      const g = pixels[srcIdx + 1];
      const b = pixels[srcIdx + 2];
      const a = pixels[srcIdx + 3];

      // Convert white background to transparent
      const isWhite = (r > 246 && g > 246 && b > 246);
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

  // Construct PNG
  const parts = [];
  // PNG signature
  parts.push(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(cropW, 0);
  ihdr.writeUInt32BE(cropH, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  parts.push(createChunk('IHDR', ihdr));

  // IDAT
  parts.push(createChunk('IDAT', deflated));

  // IEND
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
