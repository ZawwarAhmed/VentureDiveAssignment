function getEvenNumbers(limit) {
  const result  = []
  for (let i = 0; i <= limit; i += 2) result.push(i);
  return result;
}

module.exports = getEvenNumbers