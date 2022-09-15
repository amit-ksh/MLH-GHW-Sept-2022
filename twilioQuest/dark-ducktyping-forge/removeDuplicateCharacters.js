function removeDuplicateCharacters(string) {
  return string.split("").reduce((acc, cur) => {
    if (!acc || acc[acc.length-1] !== cur) acc += cur
    return acc;
  }, '')
}

console.log("Test case 1:");
console.log(removeDuplicateCharacters("aabbcc"));

console.log("Test case 2:");
console.log(removeDuplicateCharacters("asdfjkl;"));

console.log("Test case 3:");
console.log(removeDuplicateCharacters("abba"));

console.log("Test case 4:");
console.log(removeDuplicateCharacters("fffunnn"));
