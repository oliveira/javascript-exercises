import getMessage from "./getMessage.js";

const startNumber = parseInt(process.env.START_NUMBER || 1);
const finalNumber = parseInt(process.env.FINAL_NUMBER || 100);

function main() {
  for (let index = startNumber; index <= finalNumber; index++) {
    console.log(getMessage(index));
  }
}

main();
