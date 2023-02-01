import getMessage from "../src/getMessage";

describe("getMessage", () => {
  it("should return 'Visual' when the number is divisible by 3", () => {
    expect(getMessage(3)).toBe("Visual");
  });

  it("should return 'Nuts' when the number is divisible by 5", () => {
    expect(getMessage(5)).toBe("Nuts");
  });

  it("should return 'Visual Nuts' when the number is divisible by 3 and 5", () => {
    expect(getMessage(15)).toBe("Visual Nuts");
  });

  it("should return the given number when is not divisible by 3 and 5", () => {
    expect(getMessage(1)).toBe("1");
  });

  it("should throw error when the input is not a number", () => {
    expect(() => getMessage("1")).toThrow("Invalid input. Number expected.");
  });
});
