const getBMI = require("../Tasks/BMICalculator");

test("If the weight is 50 and the height is 3, the function will return 5.556.", () => {
  const weight = 50;
  const height = 3;
  expect(getBMI(weight, height)).toBe(5.556);
});

test("If the weight is 50 and the height is 0, the function will return height should be greater than zero..", () => {
  const weight = 50;
  const height = 0;
  expect(getBMI(weight, height)).toBe("height should be greater than zero.");
});

test("If the weight is 50 and the height is -1, the function will return height should be greater than zero..", () => {
  const weight = 50;
  const height = -1;
  expect(getBMI(weight, height)).toBe("height should be greater than zero.");
});

test("If the weight is 0 and the height is 3, the function will return weight should be greater than zero.", () => {
  const weight = 0;
  const height = 3;
  expect(getBMI(weight, height)).toBe("weight should be greater than zero.");
});

test("If the weight is -1 and the height is 3, the function will return weight should be greater than zero.", () => {
  const weight = -1;
  const height = 3;
  expect(getBMI(weight, height)).toBe("weight should be greater than zero.");
});