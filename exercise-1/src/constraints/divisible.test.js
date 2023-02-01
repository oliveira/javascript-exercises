import {
  isDivisibleByThree,
  isDivisibleByFive,
  isDivisibleByThreeAndFive,
} from "./divisible";

describe("Constraints", () => {
  describe("isDivisibleByThree", () => {
    it("should return true when a number is divisible by 3", () => {
      expect(isDivisibleByThree(3)).toBe(true);
    });

    it("should return false when a number is not divisible by 3", () => {
      expect(isDivisibleByThree(2)).toBe(false);
    });
  });

  describe("isDivisibleByFive", () => {
    it("should return true when a number is divisible by 3", () => {
      expect(isDivisibleByFive(5)).toBe(true);
    });

    it("should return false when a number is not divisible by 3", () => {
      expect(isDivisibleByFive(2)).toBe(false);
    });
  });

  describe("isDivisibleByThreeAndFive", () => {
    it("should return true when a number is divisible by 3", () => {
      expect(isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it("should return false when a number is not divisible by 3", () => {
      expect(isDivisibleByThreeAndFive(11)).toBe(false);
    });
  });
});
