// DOM elements
// numbers
const zeroBtn = document.querySelector('.zero');
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
function calculateAnswer(passedInArray) {
    const Obj = new BigEval();
    return Obj.exec(passedInArray.join(''));
}

function handleNumberClick(numStr) {
    const calcStr = calcArray[calcArray.length - 1];
    if (equalsToggle === true) {
        equalsToggle = false;
        calcArray = [];
        resetScreen();
    }
    if (calcStr === "+" || calcStr === "-" || calcStr === "/" || calcStr === "*") {
        if (calcArrayToggle === true) {
            calcArrayToggle = false;
            resetScreen();
        }
    }
    if (screenDisplay === '0') {
        screenDisplay = numStr;
        currentNum = Number(numStr);
        updateScreen(screenDisplay);
    } else if (screenDisplay.length < maxCharLength) {
        screenDisplay += numStr;
        currentNum = Number(screenDisplay);
        updateScreen(screenDisplay);
    }
}

function handleOperatorClick(op) {
    equalsToggle = false;
    if (calcArrayToggle === false) {
        calcArray.push(currentNum);
        calcArray.push(op);
        calcArrayToggle = true;
        currentNum = 0;
    }
}

function resetScreen() {
    screenDisplay = '0';
    currentNum = 0;
    updateScreen(screenDisplay);
}

function updateScreen(screenDisplay) {
    if (screenDisplay.length > 9 && equalsToggle === true) {
        exponentialDisplay = (Number(screenDisplay)).toExponential(5).toString();
        screen.innerHTML = `<p>${exponentialDisplay}</p>`
    } else {
        screen.innerHTML = `<p>${screenDisplay}</p>`
    }
}

// set default variables
let screenDisplay = '0';
let currentNum = 0;
let calcArray =[];
let calcArrayToggle = false;
let equalsToggle = false;
const maxCharLength = 12;

// reset screen on first run
resetScreen();

// event listeners

// event listeners - clear and delete
clearBtn.addEventListener('click', () => {
    calcArray = [];
    calcArrayToggle = false;
    resetScreen();
});

deleteBtn.addEventListener('click', () => {
    if (typeof calcArray[calcArray.length - 1] === "number" || calcArray.length === 0) {
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
    }
});

// event listeners - numbers
const numberButtons = [zeroBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn];
for (let numberBtn of numberButtons) {
    numberBtn.addEventListener('click', (e) => {
        const numStr = e.target.innerText;
        handleNumberClick(numStr);
    });
}

// event listener - decimal
decimalBtn.addEventListener('click', (e) => {
    if (screenDisplay.indexOf('.') === -1) {
        const numStr = e.target.innerText;
        handleNumberClick(numStr);
    }
});

// event listeners - operators
addBtn.addEventListener('click', () => {
    handleOperatorClick('+');
});

subtractBtn.addEventListener('click', () => {
    handleOperatorClick('-');
});

multiplyBtn.addEventListener('click', () => {
    handleOperatorClick('*');
});

divideBtn.addEventListener('click', () => {
    handleOperatorClick('/');
});

// event listener - equals

equalsBtn.addEventListener('click', () => {
    if (calcArray.length === 0) {
        calcArray = [];
        calcArrayToggle = false;
    } else {
        calcArray.push(currentNum);
        const answer = calculateAnswer(calcArray);
        screenDisplay = answer.toString();
        currentNum = Number(screenDisplay);
        calcArray = [];
        calcArrayToggle = false;
        equalsToggle = true;
        updateScreen(screenDisplay);
    }
});





