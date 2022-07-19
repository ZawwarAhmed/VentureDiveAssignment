const getEvenNumbers = require("../Tasks/evenNumberGenerator");

test("If the limit is set to 10, the function will return the following: [0, 2, 4, 6, 8, 10]", () => {
  expect(getEvenNumbers(10)).toStrictEqual([0, 2, 4, 6, 8, 10]);
});

test(`If the limit is set to 100, the function will return the following: [
  0,  2,  4,  6,  8, 10,  12, 14, 16, 18, 20,
 22, 24, 26, 28, 30, 32,  34, 36, 38, 40, 42,
 44, 46, 48, 50, 52, 54,  56, 58, 60, 62, 64,
 66, 68, 70, 72, 74, 76,  78, 80, 82, 84, 86,
 88, 90, 92, 94, 96, 98, 100
]`, () => {
  expect(getEvenNumbers(100)).toStrictEqual([
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
    40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76,
    78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
  ]);
});

test("If the limit is set to 1, the function will return the following: [0]", () => {
  expect(getEvenNumbers(1)).toStrictEqual([0]);
});

test("If the limit is set to 0, the function will return the following: [0]", () => {
  expect(getEvenNumbers(0)).toStrictEqual([0]);
});

test("If the limit is set to -1, the function will return the following: []", () => {
  expect(getEvenNumbers(-1)).toStrictEqual([]);
});
