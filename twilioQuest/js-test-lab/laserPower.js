function calculatePower(arr) {
  return arr.reduce((acc, cur) => {
    acc += cur * 2;
    return acc;
  },0)
}