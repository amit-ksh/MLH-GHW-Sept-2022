function differenceMinMax(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return max - min;
}

console.log("Test case 1:");
console.log(differenceMinMax([1, 2, 3, 4, 5]));

console.log("Test case 2:");
console.log(differenceMinMax([6, 2, 3]));

console.log("Test case 3:");
console.log(differenceMinMax([100, 0]));
