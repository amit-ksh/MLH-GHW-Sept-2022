function reverseSentence(sentence) {
  const punc = sentence.slice(-1)
  
  let res = sentence[0].toLowerCase() + sentence.slice(1, -1)
  res = res.split(" ").reverse().join(" ")
  res = res[0].toUpperCase() + res.slice(1) + punc
  
  return res
}

console.log("Test case 1:");
console.log(reverseSentence("How are you today?"));

console.log("Test case 2:");
console.log(reverseSentence("I visited Ethiopia last year."));

console.log("Test case 3:");
console.log(reverseSentence("Hurray!"));
