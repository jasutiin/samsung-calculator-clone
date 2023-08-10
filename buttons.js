'use strict';

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {addToEquation(addSymbol)}, false);

const minusButton = document.querySelector('#minus-button');
minusButton.addEventListener('click', (e) => {addToEquation(minusSymbol)}, false);

const timesButton = document.querySelector('#times-button');
timesButton.addEventListener('click', (e) => {addToEquation(timesSymbol)}, false);

const divideButton = document.querySelector('#divide-button');
divideButton.addEventListener('click', (e) => {addToEquation(divideSymbol)}, false);

const equalsButton = document.querySelector('#equals-button');
equalsButton.addEventListener('click', (e) => {solveEquation()}, false);

// adding functionality to number buttons
const numberButtons = document.getElementsByClassName('number-button');
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener(
    'click',
    (e) => {
      if (i < 3) {
        addToEquation(`${i + 7}`);
      }
      else if (i > 2 && i < 6) {
        addToEquation(`${i + 1}`);
      }
      else if (i > 5 && i < 9) {
        addToEquation(`${i - 5}`);
      }
      else {
        addToEquation('0');
      }
    },
    false
  );
}

const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener(
  'click', 
  (e) => {
    if (equation.length != 1) {
      equation = equation.substring(0, equation.length - 1);
    } else {
      equation = '0'
    }
    console.log(equation);

    document.querySelector('.message').innerHTML = equation;
  }, 
  false
);

// adding functionality to reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener(
  'click', 
  (e) => {
    equation = '0';

    document.querySelector('.message').innerHTML = equation;
    console.log(equation);
  }, 
  false
);

// adding functionality to decimal button
const decimalButton = document.querySelector('#decimal-button');
decimalButton.addEventListener(
  'click', 
  (e) => {
    if (checkForDecimal() === false) {
      if (
        equation[equation.length - 1] != timesSymbol &&
        equation[equation.length - 1] != divideSymbol && 
        equation[equation.length - 1] != addSymbol && 
        equation[equation.length - 1] != minusSymbol
        ) {
            equation += decimalSymbol;
          } else {
            equation += `0${'.'}`;
          }
      document.querySelector('.message').innerHTML = equation;
    } 
  }, 
  false
);