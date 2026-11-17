function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function calculateTax(amount, rate) {
  if (amount < 0 || rate < 0) {
    throw new Error("Negative values not allowed");
  }
  return amount * rate;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculateTax
};
