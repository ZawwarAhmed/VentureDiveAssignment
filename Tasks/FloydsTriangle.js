const n = 5;

function floydsTriangle(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result += "*     ";
    }
    if (i < n) result += "\n";
  }
  console.log(result);
}

floydsTriangle(n);

module.exports = floydsTriangle;
