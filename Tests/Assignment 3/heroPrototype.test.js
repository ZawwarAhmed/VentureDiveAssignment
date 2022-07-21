const Hero = require("../../Tasks/Assignment 3/heroPrototype");

test("works", () => {
  const myHero = new Hero("Michaelangello", "Ninja");
  expect(myHero.whoAreYou()).toBe("My name is Michaelangello and I am a Ninja.");
});
