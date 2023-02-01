const totalNumberOfCountries = parseInt(process.env.TOTAL_COUNTRIES || 195);

class CountryResponseBuilder {
  response = null;
  countries = null;

  constructor(countries) {
    if (!Array.isArray(countries) || !countries.length) {
      throw new Error("A valid countries array is required.");
    }

    this.countries = countries;
  }

  _sortCountriesByLanguageCount(countryA, countryB) {
    return countryA.languages.length - countryB.languages.length;
  }

  _getListOfLanguages(countries) {
    return countries.map((country) => country.languages || []).flat();
  }

  _getTheMostCommonLanguageFrequency(languageFrequency) {
    return Math.max(...Object.values(languageFrequency));
  }

  _getLanguageFrequency(listOfLanguages) {
    if (!Array.isArray(listOfLanguages)) {
      return {};
    }

    let languageFrequency = {};
    listOfLanguages.forEach((language) => {
      languageFrequency[language] = (languageFrequency[language] || 0) + 1;
    });

    return languageFrequency;
  }

  _getMostCommonLanguage(languageFrequency, mostCommonLanguageCount) {
    return Object.keys(languageFrequency).filter((language) => {
      return languageFrequency[language] === mostCommonLanguageCount;
    });
  }

  getNumberOfCountries() {
    this.response = { ...this.response, totalNumberOfCountries };
    return this;
  }

  getCountryWithMostLanguagesAndGerman() {
    const countryWithMostLanguagesAndGerman = this.countries
      .filter((country) => country.languages.includes("de"))
      .sort(this._sortCountriesByLanguageCount)
      .pop();
    this.response = { ...this.response, countryWithMostLanguagesAndGerman };

    return this;
  }

  getOfficialLanguages() {
    const duplicatedLanguages = this.countries
      .map((country) => country.languages)
      .flat();
    const languages = [...new Set(duplicatedLanguages)];
    this.response = { ...this.response, languages };

    return this;
  }

  getCountryWithHighestNumberOfLanguages() {
    const sortedCountries = this.countries.sort(
      this._sortCountriesByLanguageCount
    );

    let countryWithHighestNumberOfLanguages = [...sortedCountries].pop();
    this.response = { ...this.response, countryWithHighestNumberOfLanguages };

    return this;
  }

  getMostCommonLanguage() {
    const listOfLanguages = this._getListOfLanguages(this.countries);

    const languageFrequency = this._getLanguageFrequency(listOfLanguages);

    const mostCommonLanguagesFrequency =
      this._getTheMostCommonLanguageFrequency(languageFrequency);

    const mostCommonLanguages = this._getMostCommonLanguage(
      languageFrequency,
      mostCommonLanguagesFrequency
    );

    this.response = { ...this.response, mostCommonLanguages };

    return this;
  }

  build = function () {
    return this.response;
  };
}

export default CountryResponseBuilder;
