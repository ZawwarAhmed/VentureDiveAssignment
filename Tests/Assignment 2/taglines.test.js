const createSuperHero = require("../../Tasks/Assignment 2/taglines");

test("if hero is Spiderman, then the function should return the following: Spiderman | With great power, comes great responsibility.", () => {
  const mySuperHero = createSuperHero("Spiderman");
  expect(mySuperHero()).toBe(
    "Spiderman | With great power, comes great responsibility."
  );
});

test("if hero is Hulk, then the function should return the following: Hulk | Don't make me angry. You wouldn't like me when I'm angry.", () => {
  const mySuperHero = createSuperHero("Hulk");
  expect(mySuperHero()).toBe(
    "Hulk | Don't make me angry. You wouldn't like me when I'm angry."
  );
});

test("if hero is Batman, then the function should return the following: Batman | Error! Batman is not a superhero. Fight me!", () => {
  const mySuperHero = createSuperHero("Batman");
  expect(mySuperHero()).toBe(
    "Batman | Error! Batman is not a superhero. Fight me!"
  );
});

test("if hero is Wolverine, then the function should return the following: Wolverine | Bub.", () => {
  const mySuperHero = createSuperHero("Wolverine");
  expect(mySuperHero()).toBe("Wolverine | Bub.");
});

test("if hero is Captain America, then the function should return the following: Captain America | Language!", () => {
  const mySuperHero = createSuperHero("Captain America");
  expect(mySuperHero()).toBe("Captain America | Language!");
});

test("if hero is Ironman (which is not in the array), then the function should throw the following: hero not found.", () => {
  expect(() => {
    const mySuperHero = createSuperHero("Ironman");
    mySuperHero();
  }).toThrow("hero not found.");
});
