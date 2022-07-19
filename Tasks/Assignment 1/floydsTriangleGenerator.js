function floydsTriangle(n) {
  if (n < 0) return "n should be greater than zero."
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result += "*     ";
    }
    if (i < n) result += "\n";
  }
  return result;
}

module.exports = floydsTriangle;
