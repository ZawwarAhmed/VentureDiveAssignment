const weight = 50;
const height = 3;

function BMI(weight, height) {
  console.log((weight / (height * height)).toFixed(3));
}

BMI(weight, height);

module.exports = BMI;