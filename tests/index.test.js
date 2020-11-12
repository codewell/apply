const apply = require("../lib");

const foo = (a, b, c) => a + b + c;

test("Dummy test", () => {
  expect(apply(foo, 1, 2, 3)).toBe(6);
});
