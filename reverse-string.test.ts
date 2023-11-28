import { reverseString, checkTypeOfFunction } from "./reverse-string";

function sun(a: number, b: number) {
  return a + b;
}

describe("grup of test", () => {
  it("must add this numbers positive", () => {
    expect(sun(2, 2)).toBe(4);
  });

  it("must add this number negative", () => {
    expect(sun(-4, -4)).toBe(-8);
  });
});
