import {
  isDivisibleByThree,
  isDivisibleByFive,
  isDivisibleByThreeAndFive,
} from "./constraints/index.js";

function getMessage(number) {
  if (isDivisibleByThreeAndFive(number)) {
    return "Visual Nuts";
  } else if (isDivisibleByThree(number)) {
    return "Visual";
  } else if (isDivisibleByFive(number)) {
    return "Nuts";
  } else {
    return String(number);
  }
}

export default getMessage;
