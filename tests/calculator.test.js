const test = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, divide, calculateTax } = require("../src/calculator");

test("adds two numbers properly", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("subtracts two numbers properly", () => {
  assert.strictEqual(subtract(5, 2), 3);
});

test("multiplies two numbers properly", () => {
  assert.strictEqual(multiply(4, 3), 12);
});

test("divides two numbers properly", () => {
  assert.strictEqual(divide(10, 2), 5);
});

test("throws error on division by zero", () => {
  assert.throws(() => divide(10, 0), /Division by zero/);
});

test("calculates tax correctly", () => {
  assert.strictEqual(calculateTax(100, 0.15), 15);
});
