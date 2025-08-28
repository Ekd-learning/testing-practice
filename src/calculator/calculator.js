function add(a, b) {
  return a + b;
}
function substract(a, b, order = true) {
  if (order) return a - b;
  else return b - a;
}
function divide(a, b, order = true) {
  if (order) return a / b;
  else return b / a;
}
function multiply(a, b) {
  return a * b;
}

export { add, substract, divide, multiply };
