// DOM elements
// numbers
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
// operators
const divideBtn = document.querySelector('.divide');
const multiplyBtn = document.querySelector('.multiply');
const subtractBtn = document.querySelector('.subtract');
const addBtn = document.querySelector('.add');
// other elements
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const decimalBtn = document.querySelector('.decimal');
const equalsBtn = document.querySelector('.equals');

// functions
function resetScreen() {
    screenDisplay = 0;
    updateScreen(screenDisplay);
}

function updateScreen(screenDisplay) {
    screen.innerHTML = `<p>${screenDisplay}</p>`
}

// set default variables
let screenDisplay = 0;
let currentNum = 0;

// reset screen on first run
resetScreen();

// event listeners

