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

function operate (operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return minus(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      
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
