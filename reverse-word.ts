export const reverseWord = (value: string) =>
  value.split("").reverse().join("").replaceAll(",", "");
