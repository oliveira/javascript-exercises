import { isMultipleOfThree, isMultipleOfFive } from "./utils/index.js";

function getMessage(number) {
  if (typeof number !== "number") {
    throw new Error("Invalid input. Number expected.");
  }

  switch (true) {
    case isMultipleOfThree(number) && isMultipleOfFive(number):
      return "Visual Nuts";
    case isMultipleOfThree(number):
      return "Visual";
    case isMultipleOfFive(number):
      return "Nuts";
    default:
      return String(number);
  }
}

export default getMessage;
