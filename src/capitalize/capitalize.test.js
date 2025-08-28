import capitalize from "./capitalize";

test(`fox to become Fox`, () => {
  expect(capitalize("fox")).toBe("Fox");
});
test(`fOX to become FOX`, () => {
  expect(capitalize("fOX")).toBe("FOX");
});
test(`6lol to become 6lol`, () => {
  expect(capitalize("6lol")).toBe("6lol");
});
