import countries from "./data/countries.json" assert { type: "json" };
import CountryResponseBuilder from "./countryResponseBuilder.js";

function buildResponse(countries) {
  return new CountryResponseBuilder(countries)
    .getNumberOfCountries()
    .getCountryWithMostLanguagesAndGerman()
    .getOfficialLanguages()
    .getCountryWithHighestNumberOfLanguages()
    .getMostCommonLanguage()
    .build();
}

function main(countries) {
  try {
    return buildResponse(countries);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log(main(countries));
