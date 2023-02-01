const isDivisibleByThree = (num) => num % 3 === 0;
const isDivisibleByFive = (num) => num % 5 === 0;
const isDivisibleByThreeAndFive = (num) =>
  isDivisibleByThree(num) && isDivisibleByFive(num);

export { isDivisibleByThree, isDivisibleByFive, isDivisibleByThreeAndFive };
