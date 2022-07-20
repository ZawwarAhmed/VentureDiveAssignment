const gradingCriteria = [
  {
    grade: "A+",
    from: 85,
    to: 100,
  },
  {
    grade: "A",
    from: 80,
    to: 84,
  },
  {
    grade: "A-",
    from: 75,
    to: 79,
  },
  {
    grade: "B+",
    from: 70,
    to: 74,
  },
  {
    grade: "B",
    from: 65,
    to: 69,
  },
  {
    grade: "B-",
    from: 60,
    to: 64,
  },
  {
    grade: "C",
    from: 50,
    to: 59,
  },
  {
    grade: "F",
    from: 0,
    to: 50,
  },
];

function getGrade(score) {
    let result = gradingCriteria.find(item => score >= item.from && score <= item.to);
    if (result !== undefined) 
    return result.grade;
    else 
    throw new Error("Score should be between 0 and 100.")
  
}

module.exports = getGrade;
