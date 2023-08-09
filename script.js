'use strict';

let main_number = Number(document.querySelector('.message').innerHTML);
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

  main_number = 0;
}

function solveEquation() {
  
}