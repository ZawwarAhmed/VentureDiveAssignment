function getTriangle(n) {
  if (n <= 0) throw new Error("n should be greater than zero.");
  else {
    let result = "";
    const Asterisk = "*     ";
    let patternStr = "";
    for (let i = 1; i <= n; i++) {
      patternStr += Asterisk;
      result += patternStr + "\n";
    }
    return result;
  }
}

console.log(getTriangle(5));

module.exports = getTriangle;
