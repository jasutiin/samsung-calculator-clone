'use strict';

let historyButtonStatus = false;
let historyWindow = document.querySelector('.history-div');

const historyButton = document.querySelector('#history-button');
historyButton.addEventListener(
  'click',
  (e) => {
    if (historyButtonStatus) { // currently on, want to turn off
      historyWindow.classList.add('hidden');
      historyButtonStatus = false;
    } else { // currently off, want to turn on
      historyWindow.classList.remove('hidden');
      historyButtonStatus = true;
    }
  },
  false
);