import { reverseWord } from "./reverse-word";

export const isPalindrome = (value: string) =>
  value.toLowerCase() === reverseWord(value);

export const checkIfObjectIsTheSame = (value: { name: string }) => {
  return { ...value };
};
