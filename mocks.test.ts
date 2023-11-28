import axios from "axios";

const forEach = (items: number[], callback: (item: number) => void) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

test("mock callback", () => {
  const mackCallback = jest.fn((x) => x + x);

  const items = [1, 2, 3, 4];

  forEach(items, mackCallback);

  console.log(mackCallback.mock.results[0].value);

  expect(mackCallback.mock.calls.length).toBe(items.length);

  expect(mackCallback.mock.calls[0][0]).toBe(1);
});

test("test a muck function", () => {
  const fn = jest.fn();
  fn.mockReturnValue("string");

  expect(fn()).toBe("string");
});
