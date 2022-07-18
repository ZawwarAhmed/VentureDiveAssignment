function getGrade(score) {
  if (score > 100 || score < 0) return "Score should be between 0 and 100.";
  else {
    let grade =
      score >= 85 && score <= 100
        ? "A+"
        : score >= 80 && score <= 84
        ? "A"
        : score >= 75 && score <= 79
        ? "A-"
        : score >= 70 && score <= 74
        ? "B+"
        : score >= 65 && score <= 69
        ? "B"
        : score >= 60 && score <= 64
        ? "B-"
        : score >= 50 && score <= 59
        ? "C"
        : "F";

    return grade;
  }
}

console.log(getGrade(76));

module.exports = getGrade
