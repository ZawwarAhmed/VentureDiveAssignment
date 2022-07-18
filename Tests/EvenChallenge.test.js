const evenChallenge = require("../Tasks/EvenChallenge");

it("If the limit is set to 10, the program should output the following: 0 2 4 6 8 10", () => {
  console.log = jest.fn();
  evenChallenge(10);
  expect(console.log.mock.calls.length).toBe(6);
  expect(console.log.mock.calls[0][0]).toBe(0);
  expect(console.log.mock.calls[1][0]).toBe(2);
  expect(console.log.mock.calls[2][0]).toBe(4);
  expect(console.log.mock.calls[3][0]).toBe(6);
  expect(console.log.mock.calls[4][0]).toBe(8);
  expect(console.log.mock.calls[5][0]).toBe(10);
});