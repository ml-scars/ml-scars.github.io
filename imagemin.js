const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const fs = require('fs');

function convertImgs(folders) {
  if (folders.length === 0) return;

  const folder = folders.shift();
  imagemin([`src/img-src/${folder}/*`], `src/img/${folder}`, {
    plugins: [
      imageminMozjpeg(),
      imageminPngquant({ quality: '80-85' }),
    ],
  }).then((files) => {
    const imgs = files.map(f => f.path);
    if (imgs.length !== 0) console.log(imgs);
    convertImgs(folders);
  });
}

fs.readdir('src/img-src', (err, rs) => {
  convertImgs(rs);
});
