const container = document.querySelector('.container');
const root = document.querySelector(':root');

// * Generate random color
function generateRgb() {
  let col1 = Math.floor(Math.random() * 256);
  let col2 = Math.floor(Math.random() * 256);
  let col3 = Math.floor(Math.random() * 256);
  return `rgb(${col1}, ${col2}, ${col3})`
}

let squareDivs = [];

// * Generate all grids with square divs inside
function generateGrid(squares) {
  squareDivs = [];
  let squareWidth = 640 / squares + 'px';

  for (let i = 0; i < squares * squares; i++) {
    squareDivs[i] = document.createElement('div');
    squareDivs[i].className = 'square';
    squareDivs[i].style.width = squareWidth;

    container.appendChild(squareDivs[i]);   
  }

  // * Pass width value to grid columns and rows
  root.style.setProperty('--squares', squares);
  root.style.setProperty('--squareWidth', squareWidth);
}

generateGrid(4);

// * Shades of gray effect
function shadesOfGray() {
  // Create an array to store opacity value
  let opa = [];
  for (let i = 0; i < squareDivs.length; i++) {
      opa[i] = 0;
  }
  for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('mouseenter', () => {
      opa[i] += 0.1;
      if (opa[i] > 1) opa[i] = 1;

      squareDivs[i].style.background = 'black';
      squareDivs[i].style.opacity = opa[i];
    })
  }
}
const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', shadesOfGray);


// * Random color effect
function randomColor() {
  for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('mouseenter', () => {
      squareDivs[i].style.background = generateRgb();
      squareDivs[i].style.opacity = 1;
    })
  }
}
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', randomColor);

// * Normarl black effect
function justBlack() {
  for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].addEventListener('mouseenter', () => {
      squareDivs[i].style.background = 'black';
      squareDivs[i].style.opacity = 1;
    })
  }
}
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', justBlack);


// * Create a reset button
const button = document.createElement('button');
button.className = 'topBtn';
button.textContent = 'Reset';
document.body.insertBefore(button, document.body.firstChild);

button.addEventListener('click', () => {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  let newSquares = parseInt(prompt('How many squares do you want per side?'));
  generateGrid(newSquares);
})
