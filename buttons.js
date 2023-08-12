'use strict';

// adding functionality to operator buttons
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
      if (i < 3) { // number buttons 7-9
        addToEquation(`${i + 7}`);
      }
      else if (i > 2 && i < 6) { // number buttons 4-6
        addToEquation(`${i + 1}`);
      }
      else if (i > 5 && i < 9) { // number buttons 1-3
        addToEquation(`${i - 5}`);
      }
      else { // number button 0
        addToEquation('0');
      }
    },
    false
  );
}

// adding functionality to delete button
const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener(
  'click', 
  (e) => {
    if (equation.length != 1) {
      equation = equation.substring(0, equation.length - 1);
    } else { // equation is 0 by default if you remove everything else
      equation = '0'
    }
    console.log(equation);

    showEquationOnScreen();
  }, 
  false
);

// adding functionality to reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener(
  'click', 
  (e) => {
    equation = '0';

    showEquationOnScreen();
    console.log(equation);
  }, 
  false
);

// adding functionality to decimal button
const decimalButton = document.querySelector('#decimal-button');
decimalButton.addEventListener(
  'click', 
  (e) => {
    if (checkForDecimal() === false) { // there is no decimal in the current number
      if (operatorInLastIndex()) {
        equation += `0${decimalSymbol}`; // adding "0." immediately after an operator symbol
      } else {
        equation += decimalSymbol;
      }
      showEquationOnScreen();
    } 
  }, 
  false
);

// adding functionality to bracket button
const bracketButton = document.querySelector('#bracket-button');
bracketButton.addEventListener(
  'click',
  (e) => {
    if (determineBrackets() === closingBracket) {
      addToEquation(closingBracket);
    } else {
      addToEquation(openingBracket);
    }
  },
  false
);