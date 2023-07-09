export const handleCalculate = (selectedOperation, operandOne, operandTwo) => {
  let calculatedResult;
  switch (selectedOperation) {
    case "+":
      calculatedResult = parseInt(operandOne) + parseInt(operandTwo);
      break;
    case "-":
      calculatedResult = parseInt(operandOne) - parseInt(operandTwo);
      break;
    case "*":
      calculatedResult = parseInt(operandOne) * parseInt(operandTwo);
      break;
    case "/":
      calculatedResult = parseInt(operandOne) / parseInt(operandTwo);
      break;
    default:
      calculatedResult = 0;
  }
  return calculatedResult;
};
