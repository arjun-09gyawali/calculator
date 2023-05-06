// // Get all the buttons from the HTML table
// const buttons = document.querySelectorAll('button');

// // Get the input field from the HTML table
// const display = document.getElementById('display');

// // Define some variables to store the state of the calculator
// let firstOperand = '';
// let secondOperand = '';
// let operator = null;
// let shouldResetDisplay = false;

// // Add event listeners to all the buttons
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // If the button is a number, add it to the first or second operand
//     if (button.id.match(/[0-9]/)) {
//       if (shouldResetDisplay) {
//         display.value = '';
//         shouldResetDisplay = false;
//       }
//       if (!operator) {
//         firstOperand += button.value;
//         display.value += button.value;
//       } else {
//         secondOperand += button.value;
//         display.value += button.value;
//       }
//     // If the button is a decimal point, add it to the current operand
//     } else if (button.value === '.') {
//       if (shouldResetDisplay) {
//         display.value = '';
//         shouldResetDisplay = false;
//       }
//       if (!operator) {
//         if (firstOperand === '') {
//           firstOperand += '0';
//           display.value += '0';
//         }
//         if (!firstOperand.includes('.')) {
//           firstOperand += button.value;
//           display.value += button.value;
//         }
//       } else {
//         if (secondOperand === '') {
//           secondOperand += '0';
//           display.value += '0';
//         }
//         if (!secondOperand.includes('.')) {
//           secondOperand += button.value;
//           display.value += button.value;
//         }
//       }
//     // If the button is an operator, store it and reset the display
//     } else if (button.value.match(/[\+\-\*\/]/)) {
//       operator = button.value;
//       shouldResetDisplay = true;
//       display.value = '';
//     // If the button is the clear button, reset everything
//     } else if (button.id === 'clearButton') {
//       firstOperand = '';
//       secondOperand = '';
//       operator = null;
//       shouldResetDisplay = true;
//       display.value = '';
//     // If the button is the equals button, perform the calculation
//     } else if (button.id === 'equalsButton') {
//       const result = calculate();
//       firstOperand = result.toString();
//       secondOperand = '';
//       operator = null;
//       shouldResetDisplay = true;
//       display.value = result.toString();
//     }
//   });
// });

// // Function to perform the calculation
// function calculate() {
//   const first = parseFloat(firstOperand);
//   const second = parseFloat(secondOperand);
//   switch(operator) {
//     case '+':
//       return first + second;
//     case '-':
//       return first - second;
//     case '*':
//       return first * second;
//     case '/':
//       return first / second;
//     default:
//       return second;
//   }
// }
let v=" ";
var num=document.querySelectorAll("button[value]");
for (let i=0; i<num.length;i++){
    num[i].addEventListener("click",function(){
        v +=this.value;
        display.value=v;
    })
}

var display=document.getElementById("display");

var subtract=document.getElementById("subtractButton");
var add=document.getElementById("addButton");
var multiply=document.getElementById("multiplyButton");
var clear=document.getElementById("clearButton");
var equals=document.getElementById("equalsButton");
var divide=document.getElementById("divideButton");


subtract.addEventListener("click",function(){
    v += '-';
    display.value=v;

})
add.addEventListener("click",function(){
    v += '+';
    display.value=v;

})
multiply.addEventListener("click",function(){
    v += '*';
    display.value=v;

})
divide.addEventListener("click",function(){
    v += '/';
    display.value=v;

})
equals.addEventListener("click", function(){
    let final ="";
    final = eval(v);
    display.value=final;
    // v='';
})
clear.addEventListener("click",function(){
    v = "";
    display.value=v;
})
