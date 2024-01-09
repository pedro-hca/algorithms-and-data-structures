function isSubsequence(string1, string2) {
  let i = 0;
  let j = 0;
  if (!string1) return true;

  while (j < string2.length) {
    if (string1[i] === string2[j]) {
      i++;
    }
    if (string1.length === i) {
      console.log(true);
      return true;
    }
    j++;
  }
  console.log(false);
  return false;
}

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}


isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)
