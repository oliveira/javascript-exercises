<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="127px" height="127px" align="left"/>

# exercise 1

Code challenge pipipi popopo.

## Table of Contents

- [Dependencies](#dependencies)
- [Description](#description)
- [Development](#development)
  - [Run tests](#run-tests)
  - [Coverage](#coverage)

## Dependencies

- [Node@16.18+](https://nodejs.org/en/download/)

## Description

This exercise expect a solution that iterate between a range of numbers and print:

- "Visual" when the number is divisible by 3.
- "Nuts" when the number is divisible by 5.
- "Visual Nuts" when the number is divisible by 3 and 5.
- The given number when is not divisible by 3 or 5.

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
npm install
```

```bash
npm run test:unit
```

### Coverage

Run all unit tests and get coverage

```bash
npm run coverage
```
