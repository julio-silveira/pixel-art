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
function generateColors() {
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;
  let rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgb;
}

function selectColors() {
  colorPallete.children[0].style.backgroundColor = 'Black';
  colorPallete.children[0].classList.add('selected');
  for (let index = 1; index < 4; index += 1) {
    colorPallete.children[index].style.backgroundColor = generateColors();
  }
}

generatePixels(5, 5);
selectColors();
