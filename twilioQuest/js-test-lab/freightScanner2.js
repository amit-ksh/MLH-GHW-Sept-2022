function scan(arr) {
  const indexes = [];
  arr.forEach((item, index) => item === "contraband" && indexes.push(index));
  return indexes;
}
