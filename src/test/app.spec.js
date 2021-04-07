const checkList = ["test1", "test2"];
const sum = (a, b) => {
  return a + b;
};
it("check array value is present", () => {
  expect(sum(1, 2)).toBe(3);
  expect( checkList ).toContain("test1");
});
