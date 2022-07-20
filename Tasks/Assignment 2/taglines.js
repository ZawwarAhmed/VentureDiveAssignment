var taglines = [
  {
    name: "Spiderman",
    tagline: "With great power, comes great responsibility.",
  },
  {
    name: "Hulk",
    tagline: "Don't make me angry. You wouldn't like me when I'm angry.",
  },
  {
    name: "Batman",
    tagline: "Error! Batman is not a superhero. Fight me!",
  },
  {
    name: "Wolverine",
    tagline: "Bub.",
  },
  {
    name: "Captain America",
    tagline: "Language!",
  },
];

function createSuperHero(hero) {
  const superhero = taglines.find((tagline) => tagline.name === hero);
  if (superhero) return () => `${superhero.name} | ${superhero.tagline}`;
  else throw new Error("hero not found.");
}

module.exports = createSuperHero;
