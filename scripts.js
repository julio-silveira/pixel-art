const colorPallete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
let selectedColor = colorPallete.children[0];
const clearButton = document.getElementById('clear-board');

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

function selectColor() {
  for (let cpindex = 0; cpindex < 4; cpindex += 1) {
    colorPallete.children[cpindex].addEventListener(
      'click',
      function getColor() {
        selectedColor.classList.remove('selected');
        selectedColor = colorPallete.children[cpindex];
        selectedColor.classList.add('selected');
        console.log(this);
      }
    );
  }
}

generatePixels(5, 5);

const pixelRowsCount = pixelBoard.children.length;
const pixelColsCount = pixelBoard.children[0].children.length;

function paintPixel() {
  for (let crindex = 0; crindex < pixelRowsCount; crindex += 1) {
    for (let ccindex = 0; ccindex < pixelColsCount; ccindex += 1) {
      let selectedPixel = pixelBoard.children[crindex].children[ccindex];

      selectedPixel.addEventListener('click', function paint() {
        selectedPixel.style.backgroundColor =
          selectedColor.style.backgroundColor;
        console.log(this);
      });
    }
  }
}

function clearBoard() {
  clearButton.addEventListener('click', function clear() {
    for (let rindex = 0; rindex < pixelRowsCount; rindex += 1) {
      for (let cindex = 0; cindex < pixelColsCount; cindex += 1) {
        pixelBoard.children[rindex].children[cindex].style.backgroundColor =
          'white';
      }
    }
  });
}

document.onload = setColors();
selectColor();
paintPixel();
clearBoard();
