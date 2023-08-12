'use strict';

let equation = '0'; // equation used to show on screen and do calculations on
const maxEquationLength = 15;

const addSymbol = '+';
const minusSymbol = '-';
const divideSymbol = '/';
const timesSymbol = '*';
const decimalSymbol = '.';
const openingBracket = '(';
const closingBracket = ')';

function showEquationOnScreen() {
  document.querySelector('.message').innerHTML = equation;
}

// checks if there is an operator at the end of the equation
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

// adds item to the end of the equation
function addToEquation(item) {
  if (equation === '0') { // default value of equation, can't have empty equation
    if (item != timesSymbol && item != minusSymbol && item != addSymbol && item != divideSymbol) {
      equation = item; // replaces 0 with item iff item is not an operator symbol
    } else if (!(item != timesSymbol && item != minusSymbol && item != addSymbol && item != divideSymbol)) {
      alert("Invalid format used.");
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
    } else if (equation[equation.length - 1] === openingBracket) {
      if (
        item === timesSymbol ||
        item === divideSymbol ||
        item === addSymbol ||
        item === minusSymbol
      ) {
        alert("Invalid format used.");
      } else {
        equation += item;
      }
    } else if (!operatorInLastIndex() && item === openingBracket) {
      console.log("yes");
      equation += `${timesSymbol}${openingBracket}`;
      showEquationOnScreen();
    } else {
      equation += item;
      showEquationOnScreen();
    }
  }
  console.log(equation);

  showEquationOnScreen();
}

function checkForDecimal() {
  let hasDecimal = false;
  console.log(equation);

  // loops through equation to find decimal and operator symbols
  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === decimalSymbol) {
      hasDecimal = true; 
    } else if ( // if we find operator, that means a new number starts so you can add new decimal
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

function determineBrackets() {
  let bracketStack = []

  for (let i = 0; i < equation.length; i++) {
    if (equation[i] === openingBracket) {
      bracketStack.push('(')
    } else if (equation[i] === closingBracket) {
      bracketStack.pop();
    }
  }

  if (bracketStack.pop() === '(') {
    if (equation[equation.length - 1] === openingBracket) {
      return '('
    }
    return ')';
  } else {
    return '(';
  }
}

function solveEquation() {
  if (operatorInLastIndex()) { // equation is not complete
        alert("Invalid format used.");
  } else {
    // equation = `${eval(equation)}`; // nice try you're not allowed to do this
    showEquationOnScreen();
  }
}