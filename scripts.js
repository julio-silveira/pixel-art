const colorPallete = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
let selectedColor = colorPallete.children[0];
const clearButton = document.getElementById('clear-board');
const size = document.getElementById('board-size');
const changeButton = document.getElementById('generate-board');

function generatePixels(rows, columns) {
  for (let index = 0; index < rows; index += 1) {
    const r = document.createElement('div');
    for (let index2 = 0; index2 < columns; index2 += 1) {
      const c = document.createElement('div');
      c.className = 'pixel';
      r.appendChild(c);
    }
    pixelBoard.appendChild(r);
  }
}

generatePixels(5, 5);
let pixelRowsCount = pixelBoard.children.length;
let pixelColsCount = pixelBoard.children[0].children.length;

function generateColors() {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  return `rgb(${red},${green},${blue})`;
}
function setColors() {
  selectedColor.style.backgroundColor = 'Black';
  selectedColor.classList.add('selected');
  for (let index = 1; index < 4; index += 1) {
    colorPallete.children[index].style.backgroundColor = generateColors();
  }
}
function changeSelection(num) {
  selectedColor.classList.remove('selected');
  selectedColor = colorPallete.children[num];
  selectedColor.classList.add('selected');
}

function selectColor() {
  for (let i = 0; i < 4; i += 1) {
    colorPallete.children[i].addEventListener('click', () => {
      changeSelection(i);
    });
  }
}
function removeRows() {
  pixelRowsCount = pixelBoard.children.length;
  pixelColsCount = pixelBoard.children[0].children.length;
  for (let removeIndex = 0; removeIndex < pixelRowsCount; removeIndex += 1) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}
setColors();
// prettier-ignore
function paintPixel() {
  pixelRowsCount = pixelBoard.children.length;
  pixelColsCount = pixelBoard.children[0].children.length;
  for (let crindex = 0; crindex < pixelRowsCount; crindex += 1) {
    for (let ccindex = 0; ccindex < pixelColsCount; ccindex += 1) {
      const pixel = pixelBoard.children[crindex].children[ccindex];
      pixel.addEventListener('click', () => {
        pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
      });
    }
  }
}
changeButton.addEventListener('click', () => {
  const newSize = parseInt(size.value, 10);
  if (newSize <= 5) {
    removeRows();
    generatePixels(5, 5);
    paintPixel();
  } else if (newSize >= 50) {
    removeRows();
    generatePixels(50, 50);
    paintPixel();
  } else if (newSize > 5 && newSize < 50) {
    removeRows();
    generatePixels(newSize, newSize);
    paintPixel();
  } else alert('Board inválido!');
});
function clearBoard() {
  clearButton.addEventListener('click', () => {
    for (let ri = 0; ri < pixelRowsCount; ri += 1) {
      for (let ci = 0; ci < pixelColsCount; ci += 1) {
        pixelBoard.children[ri].children[ci].style.backgroundColor = 'white';
      }
    }
  });
}
selectColor();
paintPixel();
clearBoard();
