import { add, substract, divide, multiply } from "./calculator.js";

test(`1+2=3`, () => {
  expect(add(1, 2)).toBe(3);
});
test(`1-2=-1`, () => {
  expect(substract(1, 2)).toBe(-1);
});
test(`1/2=0.5`, () => {
  expect(divide(1, 2)).toBe(0.5);
});
test(`-2*5=-10`, () => {
  expect(multiply(-2, 5)).toBe(-10);
});
