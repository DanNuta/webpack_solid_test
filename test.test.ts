function cordovaError() {
  throw new Error("you not run the cordova app");
}

test("not using the cordova app", () => {
  expect(cordovaError).toThrow();
});
