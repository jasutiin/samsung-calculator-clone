'use strict';

let equation = '0';
const maxEquationLength = 15;

const addSymbol = '+';
const minusSymbol = '-';
const divideSymbol = '/';
const timesSymbol = 'x';
const decimalSymbol = '.';

function operatorInLastIndex() {
  if (
    equation[equation.length - 1] === timesSymbol || 
    equation[equation.length - 1] === divideSymbol || 
    equation[equation.length - 1] === addSymbol || 
    equation[equation.length - 1] === minusSymbol
  ) {
      return true;
  } else {
    return false;
  }
}

// creates a new number
function addToEquation(item) {

  if (equation === '0') {
    if (item != timesSymbol && item != minusSymbol && item != addSymbol && item != divideSymbol) {
      equation = item;
    }
  } else if (equation.length < maxEquationLength) {
    if (operatorInLastIndex()) {
      if (
        item != timesSymbol &&
        item != divideSymbol &&
        item != addSymbol &&
        item != minusSymbol
      ) {
        equation += item;
      }
    } else {
      equation += item;
    }
  }
  console.log(equation);

  document.querySelector('.message').innerHTML = equation;
}

function checkForDecimal() {
  let hasDecimal = false;
  console.log(equation);

  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === decimalSymbol) {
      hasDecimal = true;
    } else if (
      equation[i] === addSymbol || 
      equation[i] === minusSymbol || 
      equation[i] === timesSymbol || 
      equation[i] === divideSymbol
      ) {
          hasDecimal = false;
    }
  }

  return hasDecimal;
}

function solveEquation() {
  if (operatorInLastIndex()) {
        alert("Invalid format used.");
  } else {
    // equation = `${eval(equation)}`; nice try you're not allowed to do this
    document.querySelector('.message').innerHTML = equation;
  }
}