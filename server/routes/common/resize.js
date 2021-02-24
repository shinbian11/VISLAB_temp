const sharp = require('sharp');
const fs = require('fs');

function resizeImage(imagePath, width, height) {
  sharp(imagePath).resize(width, height, { fit: 'inside' }).toBuffer((err, buf) => {
      fs.writeFile(imagePath, buf.toString('base64'), {encoding: 'base64'}, (err) => {
        console.log(err);
      });
  });
}

module.exports = resizeImage;
