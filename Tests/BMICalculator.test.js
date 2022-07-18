const BMI = require("../Tasks/BMICalculator");

it("If the weight is 50 and the height is 3, then the program should print 5.556.", () => {
    console.log = jest.fn();
    const weight = 50;
    const height = 3;
    BMI(weight, height);
    expect(console.log.mock.calls[0][0]).toBe("5.556");
  });