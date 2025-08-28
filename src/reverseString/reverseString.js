function reverseString(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s = s.concat(str[i]);
  }
  return s;
}

export default reverseString;
