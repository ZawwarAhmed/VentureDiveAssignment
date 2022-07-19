const floydsTriangle = require("../Tasks/FloydsTriangle");

it(`If the n is 5, then the program should print 
    *     
    *     *     
    *     *     *     
    *     *     *     *     
    *     *     *     *     *     
`, () => {
  console.log = jest.fn();
  const n = 5;
  floydsTriangle(n);
  expect(console.log.mock.calls[0][0]).toBe(`*     
*     *     
*     *     *     
*     *     *     *     
*     *     *     *     *     `);
});

it(`If the n is 10, then the program should print 
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
  floydsTriangle(n);
  expect(console.log.mock.calls[0][0]).toBe(`*     
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
