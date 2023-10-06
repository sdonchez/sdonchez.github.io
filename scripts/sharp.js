const sharp = require('sharp');
const fs = require('fs');
const directory = 'src/assets';
const widths = [128,256,512,1080,1920,3840];

fs.readdirSync(directory).forEach(file => {
    if(!file.includes("-"))
    {
        widths.forEach(width => {
            sharp(`${directory}/${file}`)
            .resize(width, null, {withoutEnlargement: true})
            .toFile(`${directory}/${file.split('.').slice(0, -1).join('.')}-${width}.${file.split('.').slice(-1)}`);

            sharp(`${directory}/${file}`)
            .resize(width, null, {withoutEnlargement: true})
            .webp()
            .toFile(`${directory}/${file.split('.').slice(0, -1).join('.')}-${width}.webp`);
        });
    }
  });