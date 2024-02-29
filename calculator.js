let num1;
let num2;
let operation;

while (true) {
  num1 = prompt("Enter the first number:");

  if (num1 === null || isNaN(num1)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    num1 = Number(num1);
    break;
  }
}

while (true) {
  operation = prompt("Enter the operation (+, -, *, /, % , **):");

  if (
    operation === null ||
    !["+", "-", "*", "/", "%", "**"].includes(operation)
  ) {
    alert("Invalid operation. Please enter a valid operation.");
  } else {
    break;
  }
}

while (true) {
  num2 = prompt("Enter the second number:");

  if (num2 === null || isNaN(num2)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    num2 = Number(num2);
    break;
  }
}

let result;
switch (operation) {
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
      result = "Error: Division by zero";
    } else {
      result = num1 / num2;
    }
    break;
  case "%":
    result = (num1 * num2) / 100;
    break;
  case "**":
    result = Math.pow(num1, num2);
    break;
  default:
    alert("Invalid operation.");
    break;
}

alert("Result: " + result);
