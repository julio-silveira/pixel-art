const colorPallete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
let selectedColor = colorPallete.children[0];

function generatePixels(rows, columns) {
  for (let index = 0; index < rows; index += 1) {
    const r = document.createElement('div');
    r.className = 'row';
    for (let index2 = 0; index2 < columns; index2 += 1) {
      const c = document.createElement('div');
      c.className = 'pixel';
      r.appendChild(c);
    }
    pixelBoard.appendChild(r);
  }
}
function generateColors() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  const rgb = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return rgb;
}

function setColors() {
  selectedColor.style.backgroundColor = 'Black';
  selectedColor.classList.add('selected');
  for (let index = 1; index < 4; index += 1) {
    colorPallete.children[index].style.backgroundColor = generateColors();
  }
}

generatePixels(5, 5);
document.onload = setColors();

colorPallete.children[0].addEventListener('click', function () {
  console.log(this);
});
