import { isPalindrome, checkIfObjectIsTheSame } from "./isPalindrome";

test("must return true", () => {
  expect(isPalindrome("dad")).toBe(true);
});

test("Dan is not a palindrome word", () => {
  expect(isPalindrome("Dan")).toBe(false);
});

test("check if the object are the same", () => {
  const obj = { name: "Dan" };
  expect(checkIfObjectIsTheSame(obj)).toEqual(obj);
});
