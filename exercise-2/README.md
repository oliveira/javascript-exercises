<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="127px" height="127px" align="left"/>

# exercise 2

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

This exercise expect a solution that receives a json object and return:

- The number of countries in the world.
- The country with the most official languages where they officially speak German.
- All languages spoken in the listed countries.
- The country with the highest number of official languages.
- The most common language(s) of all countries.

The first information could be obtained counting the countries presented on the json. With an incompleted json, a wrong result would be presented. So this information will be taken from an environment variable. This approach is safer than the other, since the number of countries doesn't usually change.

```bash
export TOTAL_COUNTRIES="195"
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
