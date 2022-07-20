const getTriangle = require("../../Tasks/Assignment 1/floydsTriangleGenerator");

test(`If the n is 5, then the program should print 
    *     
    *     *     
    *     *     *     
    *     *     *     *     
    *     *     *     *     *     
`, () => {
  const n = 5;

  expect(getTriangle(n)).toBe(`*     
*     *     
*     *     *     
*     *     *     *     
*     *     *     *     *     
`);
});

test(`If the n is 10, then the program should print 
    *     
    *     *     
    *     *     *     
    *     *     *     *     
    *     *     *     *     *     
    *     *     *     *     *     *     
    *     *     *     *     *     *     *     
    *     *     *     *     *     *     *     *     
    *     *     *     *     *     *     *     *     *     
    *     *     *     *     *     *     *     *     *     *      
`, () => {
  console.log = jest.fn();
  const n = 10;
  expect(getTriangle(n)).toBe(`*     
*     *     
*     *     *     
*     *     *     *     
*     *     *     *     *     
*     *     *     *     *     *     
*     *     *     *     *     *     *     
*     *     *     *     *     *     *     *     
*     *     *     *     *     *     *     *     *     
*     *     *     *     *     *     *     *     *     *     
`);
});

test(`If the n is 0, then the function will throw: "n should be greater than zero."`, () => {
  const n = 0;

  expect(() => {getTriangle(n)}).toThrow("n should be greater than zero.");
});

test(`If the n is -1, then the function will throw: "n should be greater than zero."`, () => {
  const n = -1;

  expect(() => {
    getTriangle(n);
  }).toThrow("n should be greater than zero.");
});
