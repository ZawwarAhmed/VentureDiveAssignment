function Hero(name, occupation) {
  this.name = name;
  this.occupation = occupation;
}

Hero.prototype.whoAreYou = function() {
    return `My name is ${this.name} and I am a ${this.occupation}.`;
};

module.exports = Hero;