'use strict';

let main_number = document.querySelector('.message').innerHTML;
const equation = new Array();
let hasDecimal = false;

// creates a new number
function changeNumber(num) {
  let prev_number = main_number.charAt(main_number.length - 1);

  if (prev_number === '0' && main_number < 2) { // by default when calculator is first turned on
    main_number = `${num}`;
  } else if (main_number.length != 15) { // checks for max length of number
    main_number = main_number + num;
  }

  document.querySelector('.message').innerHTML = main_number;
}

function addToEquation(operationType) {
  equation.push(main_number);
  equation.push(operationType);
  console.log(equation);

  main_number = '0';
}

function solveEquation() {
  
}

const numberButtons = document.getElementsByClassName('number-button');

// adding functionality to number buttons
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener(
    'click',
    (e) => {
      if (i < 9) {
        changeNumber(i + 1);
      } else {
        changeNumber(0);
      }
    },
    false
  );
}

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

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', (e) => {addToEquation('+')}, false);

const equalsButton = document.querySelector('#equals-button');
addButton.addEventListener('click', (e) => {solveEquation()}, false);

