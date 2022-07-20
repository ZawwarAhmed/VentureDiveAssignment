function createBase(baseNumber) {
    return (num) => baseNumber + num
}

var addFive = createBase(5);
addFive(10); // returns 15
addFive(21); // returns 26

const addTen = createBase(10);

console.log("🚀 ~ file: createBase.js ~ line 11 ~ addTen(23)", addTen(23))
addTen(20)

module.exports = createBase;