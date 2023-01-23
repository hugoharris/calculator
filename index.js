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
function handleNumberClick(numStr) {
    if (screenDisplay === '0') {
        screenDisplay = numStr;
        currentNum = 1;
        updateScreen(screenDisplay);
    } else {
        screenDisplay += numStr;
        currentNum = Number(screenDisplay);
        updateScreen(screenDisplay);
    }
}

function resetScreen() {
    currentNum = 0;
    screenDisplay = '0';
    updateScreen(screenDisplay);
}

function updateScreen(screenDisplay) {
    screen.innerHTML = `<p>${screenDisplay}</p>`
}

// set default variables
let screenDisplay = '0';
let currentNum = 0;

// reset screen on first run
resetScreen();

// event listeners

// event listeners - clear and delete
clearBtn.addEventListener('click', () => {
    resetScreen();
});

deleteBtn.addEventListener('click', () => {
    if (screenDisplay !== '0') {
        if (screenDisplay.length === 1) {
            screenDisplay = '0';
            currentNum = 0;
            updateScreen(screenDisplay);
        } else {
            screenDisplay = screenDisplay.slice(0, -1);
            currentNum = Number(screenDisplay);
            updateScreen(screenDisplay);
        }
    } 
});

// event listeners - numbers
const numberButtons = [oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn];
for (let numberBtn of numberButtons) {
    numberBtn.addEventListener('click', (e) => {
        const numStr = e.target.innerText;
        handleNumberClick(numStr);
    });
}





