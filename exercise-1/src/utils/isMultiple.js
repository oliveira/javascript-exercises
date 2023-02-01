const createIsMultipleOf = (divisor) => (num) => num % divisor === 0;
const isMultipleOfThree = createIsMultipleOf(3);
const isMultipleOfFive = createIsMultipleOf(5);

export { isMultipleOfThree, isMultipleOfFive };
