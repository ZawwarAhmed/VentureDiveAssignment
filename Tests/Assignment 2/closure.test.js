const createBase = require("../../Tasks/Assignment 2/closure");

var addFive = createBase(5);
test('addFive(10); // returns 15', () => {
  expect(addFive(10)).toBe(15);
});

test('addFive(21); // returns 26', () => {
  expect(addFive(21)).toBe(26);
});

var addTen = createBase(10);
test('addTen(10); // returns 20', () => {
  expect(addTen(10)).toBe(20);
});

test('addTen(13); // returns 23', () => {
  expect(addTen(13)).toBe(23);
});

var addZero = createBase(0);
test('addZero(13); // returns 23', () => {
  expect(addTen(13)).toBe(23);
});