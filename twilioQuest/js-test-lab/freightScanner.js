function scan(arr) {
  let increment = 0;
  arr.forEach((item, index) => item === "contraband" && increment++);
  return increment;
}