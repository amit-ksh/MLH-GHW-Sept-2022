function getFirstAmountSorted(arr, n) {
  return arr.sort((a, b) => (a > b ? 1 : -1)).slice(0, n);
}
