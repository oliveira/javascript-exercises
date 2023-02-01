<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="127px" height="127px" align="left"/>

# exercises

Code challenge pipipi popopo.

## Table of Contents

- [Dependencies](#dependencies)
- [Exercise 1](#exercise-1)
- [Development](#development)
  - [Run tests](#run-tests)
  - [Coverage](#coverage)

## Dependencies

- [Node@16.18+](https://nodejs.org/en/download/)

## Exercise 1

This exercise expect a solution that iterate between a range of numbers and print:

- "Visual" when the number is divisible by 3.
- "Nuts" when the number is divisible by 5.
- "Visual Nuts" when the number is divisible by 3 and 5.
- the given number when is not divisible by 3 or 5.

```bash
export START_NUMBER="1" && export FINAL_NUMBER="500"
```

Finally, to run the project:

```bash
npm start
```

---

## Development

### Run tests

Run all unit tests

```bash
npm run test:unit
```

### Coverage

Run all unit tests and get coverage

```bash
npm run coverage
```
