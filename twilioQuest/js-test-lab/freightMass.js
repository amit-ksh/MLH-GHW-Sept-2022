function calculateMass(arr) {
  return arr.reduce((acc, curr) => {
    acc += curr.length
    return acc
  }, 0)
} 