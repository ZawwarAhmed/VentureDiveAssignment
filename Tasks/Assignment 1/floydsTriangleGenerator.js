function getTriangle(n) {
  if (n <= 0) throw new Error("n should be greater than zero.");
  else {
    let result = "";
    let j = n - 1;
    for (let i = 1; i <= n - j; i++) {
      result += "*     ";
      if (i < n && i === n - j) {
        result += "\n";
        i = 0;
        j--;
      }
    }
    return result;
  }
}

console.log(getTriangle(5));

module.exports = getTriangle;
