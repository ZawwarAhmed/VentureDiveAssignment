const getGrade = require("../../Tasks/Assignment 1/gradeCalculator");

test("If score is b/w 85-100, then the grade should be A+", () => {
  expect(getGrade(88)).toBe("A+");
});

test("If score is b/w 80-84, then the grade should be A+", () => {
  expect(getGrade(83)).toBe("A");
});

test("If score is b/w 75-79, then the grade should be A+", () => {
  expect(getGrade(76)).toBe("A-");
});

test("If score is b/w 70-74, then the grade should be A+", () => {
  expect(getGrade(73)).toBe("B+");
});

test("If score is b/w 65-69, then the grade should be A+", () => {
  expect(getGrade(67)).toBe("B");
});

test("If score is b/w 60-64, then the grade should be A+", () => {
  expect(getGrade(62)).toBe("B-");
});

test("If score is b/w 50-59, then the grade should be C", () => {
  expect(getGrade(55)).toBe("C");
});

test("If score is b/w 0-50, then the grade should be F", () => {
  expect(getGrade(48)).toBe("F");
});

test("If score is less than 0 or greter than 100, then it should throw: 'Score should be between 0 and 100.'", () => {
  expect(() => {
    getGrade(103);
  }).toThrow("Score should be between 0 and 100.");
});