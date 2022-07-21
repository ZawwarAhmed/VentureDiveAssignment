const Hero = require("../../Tasks/Assignment 3/hero");

test("works", () => {
  const myHero = new Hero("Superman", "Flying");
  expect(myHero.name).toBe("Superman");
  expect(myHero.superpower).toBe("Flying");
});
