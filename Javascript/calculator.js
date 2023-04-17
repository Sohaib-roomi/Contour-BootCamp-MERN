// A calculator that takes first two inputs as number from user and  then an operator 
// Validation: user can only input numbers and operator
const prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter first number "));

let num2 = Number(prompt("Enter second number "));

console.log("Getting operation choice...");
let op = prompt("Select operation you want to perform: \n1 for + \n2 for - \n3 for / \n4 for * ");

if(op === "1" ){
    op = "+";
}
else if(op === "2"){
    op = "-"
}
else if(op === "3"){
    op = "/"
}
else if(op === "4"){
    op = "*"
}
else{
    console.log("Invalid Input")
}



function calculator(num1, num2, operand) {
    let result;
  
    // Perform validation on the inputs
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log("Please enter two numbers.");
      return;
    }
  
    if (operand !== "+" && operand !== "-" && operand !== "*" && operand !== "/") {
      console.log("Please enter a valid operand (+, -, *, /).");
      return;
    }
  
    // Perform the calculation based on the operand
    switch (operand) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("Cannot divide by zero.");
          return;
        }
        result = num1 / num2;
        break;
    }
  
    // Print the result to the console
    console.log(`${num1} ${operand} ${num2} = ${result}`);
  }
  
calculator(num1, num2, op);