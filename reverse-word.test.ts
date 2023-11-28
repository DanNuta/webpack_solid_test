import { reverseWord } from "./reverse-word";

test("check if the function reverse word", () => {
  expect(reverseWord("11")).toBe("11");
});

test("varify element in a array", () => {
  const items = ["brad", "milk", "iron"];

  expect(items).toContain("milk");
});
