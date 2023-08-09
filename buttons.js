'use strict';

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {addToEquation('+')}, false);

const minusButton = document.querySelector('#minus-button');
minusButton.addEventListener('click', (e) => {addToEquation('-')}, false);

const timesButton = document.querySelector('#times-button');
timesButton.addEventListener('click', (e) => {addToEquation('*')}, false);

const divideButton = document.querySelector('#divide-button');
divideButton.addEventListener('click', (e) => {addToEquation('/')}, false);

const equalsButton = document.querySelector('#equals-button');
equalsButton.addEventListener('click', (e) => {solveEquation()}, false);

// adding functionality to number buttons
const numberButtons = document.getElementsByClassName('number-button');
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener(
    'click',
    (e) => {
      if (i < 3) 
        changeNumber(i + 7);
      else if (i > 2 && i < 6)
        changeNumber(i + 1);
      else if (i > 5 && i < 9)
        changeNumber(i - 5);
      else
        changeNumber(0);
    },
    false
  );
}

// adding functionality to reset button
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener(
  'click', 
  (e) => {
    main_number = '0';
    equation.length = 0;
    hasDecimal = false;

    document.querySelector('.message').innerHTML = main_number;
  }, 
  false
);

// adding functionality to decimal button
const decimalButton = document.querySelector('#decimal-button');
decimalButton.addEventListener(
  'click', 
  (e) => {
    let prev_number = main_number.charAt(main_number.length - 1);

    if (prev_number != '.' && hasDecimal === false) {
      main_number = main_number + '.';
      hasDecimal = true;
      document.querySelector('.message').innerHTML = main_number;
    }
  }, 
  false
);