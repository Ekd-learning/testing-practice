import cipher from "./caesarCipher";

test(`aBc -> dEf`, () => {
  expect(cipher("aBc")).toBe("dEf");
});
test(`xyz -> abc`, () => {
  expect(cipher("xyz")).toBe("abc");
});
test(`HeLLo -> KhOOr`, () => {
  expect(cipher("HeLLo")).toBe("KhOOr");
});
test(`Hello, World!`, () => {
  expect(cipher("Hello, World!")).toBe("Khoor, Zruog!");
});
