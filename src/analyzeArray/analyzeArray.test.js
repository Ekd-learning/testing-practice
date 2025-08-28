import analyzeArray from "./analyzeArray";
// {average:4\nmin:1\nmax:8\nlength:6}
test(`[1,8,3,4,2,6] average => 4`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test(`[1,8,3,4,2,6] min => 1`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test(`[1,8,3,4,2,6] max => 8`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test(`[1,8,3,4,2,6] length => 6`, () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
