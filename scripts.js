const colorPallete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');

function generatePixels(rows, columns) {
  for (let index = 0; index < rows; index += 1) {
    let r = document.createElement('div');
    r.className = 'row';
    for (let index2 = 0; index2 < columns; index2 += 1) {
      let c = document.createElement('div');
      c.className = 'pixel';
      r.appendChild(c);
    }
    pixelBoard.appendChild(r);
  }
}

generatePixels(5, 5);
