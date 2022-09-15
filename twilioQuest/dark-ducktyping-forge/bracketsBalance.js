function balanceBrackets(array) {
  const stk = [];
  
  for(const e of array) {
    switch (e) {
      case '(':
      case '{':
      case '[':
        stk.push(e)
        break;
      case ')':
        if (stk.pop() !== '(')  return false;
        break;
      case '}':
        if (stk.pop() !== '{')  return false;
        break;
      case ']':
        if (stk.pop() !== '[')  return false;
        break;
    }
  }
  
  return stk.length === 0 ? true : false;
}
  
  console.log("Test case 1:");
  console.log(balanceBrackets(["{", "}"]).toString());

  console.log("Test case 2:");
  console.log(balanceBrackets(["[", "(", "]", ")"]).toString());
  
  console.log("Test case 3:");
  console.log(balanceBrackets([]).toString());
  
  console.log("Test case 4:");
  console.log(balanceBrackets(["{", "[", "}"]).toString());
  
  console.log("Test case 5:");
  console.log(balanceBrackets(["]", "(", ")", "["]).toString());

  console.log("Test case 6:");
  console.log(balanceBrackets(["(", ")", "[", "(", "{", "}", ")", "]"]).toString());
  