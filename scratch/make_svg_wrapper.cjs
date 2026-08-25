const fs = require('fs');
const path = require('path');

const pngBuffer = fs.readFileSync('public/logo.png');
const base64Png = pngBuffer.toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 345" width="100%" height="100%" preserveAspectRatio="xMidYMid contain">
  <image href="data:image/png;base64,${base64Png}" x="0" y="0" width="480" height="345" preserveAspectRatio="xMidYMid contain" />
</svg>`;

fs.writeFileSync('public/logo.svg', svgContent);
fs.writeFileSync('src/assets/logo.svg', svgContent);
console.log('Successfully created exact SVG wrappers for public/logo.svg and src/assets/logo.svg');
