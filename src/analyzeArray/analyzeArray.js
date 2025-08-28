function getMin(arr) {
  return Math.min(...arr);
}
function getMax(arr) {
  return Math.max(...arr);
}
function getAverage(arr) {
  if (!arr || arr.length === 0) return;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
function getLength(arr) {
  if (!arr) return;
  return arr.length;
}
function analyzeArray(arr) {
  return {
    average: getAverage(arr),
    min: getMin(arr),
    max: getMax(arr),
    length: getLength(arr),
  };
}

export default analyzeArray;
