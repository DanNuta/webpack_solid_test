import { reverseString } from "./reverse-string";
test("reverse function exist", () => {
  expect(reverseString).toBeDefined();
});

test("reverse function", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
