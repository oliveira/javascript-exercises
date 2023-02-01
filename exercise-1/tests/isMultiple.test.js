import { isMultipleOfThree, isMultipleOfFive } from "../src/utils/isMultiple";

describe("Constraints", () => {
  describe("isMultipleOfThree", () => {
    it("should return true when a number is divisible by 3", () => {
      expect(isMultipleOfThree(3)).toBe(true);
    });

    it("should return false when a number is not divisible by 3", () => {
      expect(isMultipleOfThree(2)).toBe(false);
    });
  });

  describe("isMultipleOfFive", () => {
    it("should return true when a number is divisible by 3", () => {
      expect(isMultipleOfFive(5)).toBe(true);
    });

    it("should return false when a number is not divisible by 3", () => {
      expect(isMultipleOfFive(2)).toBe(false);
    });
  });
});
