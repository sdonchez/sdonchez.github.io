const sharp = require('sharp');
const fs = require('fs');
const directory = 'src/assets';
const widths = [128,256,512,1080,1920,3840];
fs.readdirSync(directory).forEach(file => {
    widths.forEach(width => {
        sharp(`${directory}/${file}`)
        .resize(width, null, {withoutEnlargement: true}) // width, height
        .toFile(`${directory}/${file.split('.').slice(0, -1).join('.')}-${width}.${file.split('.').slice(-1)}`);
    })
  });