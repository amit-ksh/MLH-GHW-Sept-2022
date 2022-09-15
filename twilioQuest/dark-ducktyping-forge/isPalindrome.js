function isPalindrome(string) {
  if (!string) return true;
  
  string = string.toLowerCase().split(" ").join("");
  let flag = true;
  const len = string.length
  
  for (let i = 0; i < string.length/2; i++) {
    if (string[i] !== string[len-i-1]) {
      flag = false;
      break;
    }
  }
  
  return flag
}

  console.log("Test case 1:");
  console.log(isPalindrome("tacocat").toString());
  
  console.log("Test case 2:");
  console.log(isPalindrome("").toString());
  
  console.log("Test case 3:");
  console.log(isPalindrome("heLLo").toString());
  
  console.log("Test case 4:");
  console.log(isPalindrome("Never odd or even").toString());