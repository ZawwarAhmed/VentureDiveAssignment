function getBMI(weight, height) {
  if (height <= 0) throw new Error("height should be greater than zero.")
  if (weight <= 0) throw new Error("weight should be greater than zero.")
  return parseFloat((weight / (height * height)).toFixed(3));
}

module.exports = getBMI;
