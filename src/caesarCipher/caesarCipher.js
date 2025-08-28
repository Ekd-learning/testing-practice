const alphabet = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

function inAlphabet(char) {
  if (alphabet.includes(char)) return true;
  return false;
}

function getAlphabetIndexOfChar(char) {
  return alphabet.indexOf(char);
}

function getNewIndex(index, key) {
  if (index + key * 2 >= alphabet.length)
    return index + key * 2 - alphabet.length;
  return index + key * 2;
}

function getReplacement(char, key) {
  return alphabet[getNewIndex(getAlphabetIndexOfChar(char), key)];
}

function cipher(passedStr, key = 3) {
  return passedStr
    .split("")
    .map((char) => (inAlphabet(char) ? getReplacement(char, key) : char))
    .join("");
}

export default cipher;
