describe("03-sumNumbers", function () {
    it("sums array of one num", function () {
      expect(sumNumbers([10])).toBe(10);
    });
    it("sums array of two nums", function () {
      expect(sumNumbers([5, 10])).toBe(15);
    });
    it("sums_array_of_three_nums", function () {
      expect(sumNumbers([2, 10, -5])).toBe(7);
    });
    it("sums_empty_array", function () {
      expect(sumNumbers([])).toBe(0);
    });
  });