import { fetchPost } from "./async-function";

test("should return corect to to", () => {
  fetchPost().then((data) => {
    expect(data).toBeTruthy();
  });
});

test("check this function with async", async () => {
  const data = await fetchPost();

  expect(data).toBeTruthy();
});
