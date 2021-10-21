function add (a,b) {
  return a + b; 
}

function minus(a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

function operate (operator,num1, num2) {
  if(operator == (num1 + num2)) {
    return add();
  } else if(operator == (num1 - num2)) {
    return minus();
  } else if(operator == (num1 * num2)) {
    return multiply();
  } else if(operator == (num1 / num2)) {
    return divide();
  }
}

const pressNum = document.querySelectorAll('.btn-num');
const display_val = document.querySelector('.calc-screen-container-present');

// display numbers on screen
function displayToScreen() {
  let display = display_val.textContent;
  pressNum.forEach((btn) => {
    btn.addEventListener('click', () => {
      if(display == '0') {
        return display_val.textContent = btn.innerHTML;
      } else {
        return display_val.textContent += btn.innerHTML;
      }
    });
  });
} 

displayToScreen();