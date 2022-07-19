const floydsTriangle = require("../../Tasks/Assignment 1/floydsTriangleGenerator");

test(`If the n is 5, then the program should print 
    *     
    *     *     
    *     *     *     
    *     *     *     *     
    *     *     *     *     *     
`, () => {
  const n = 5;
  
  expect(
    floydsTriangle(n)).toBe(`*     
*     *     
*     *     *     
*     *     *     *     
*     *     *     *     *     `);
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
  expect(floydsTriangle(n)).toBe(`*     
*     *     
*     *     *     
*     *     *     *     
*     *     *     *     *     
*     *     *     *     *     *     
*     *     *     *     *     *     *     
*     *     *     *     *     *     *     *     
*     *     *     *     *     *     *     *     *     
*     *     *     *     *     *     *     *     *     *     `);
});

test(`If the n is 0, then the function will return: ""`, () => {
  const n = 0;
  
  expect(
    floydsTriangle(n)).toBe("");
});

test(`If the n is -1, then the function will return: "n should be greater than zero."`, () => {
  const n = -1;
  
  expect(
    floydsTriangle(n)).toBe("n should be greater than zero.");
});