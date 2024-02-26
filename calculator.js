let num1 = Number(prompt("Enter the first number:"));

let operation = prompt("Enter the operation (+, -, *, /, % , **):");

let num2 = Number(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid input. Please enter valid numbers.");
} else {
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
        result = "Error";
      } else result = num1 / num2;
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
}
