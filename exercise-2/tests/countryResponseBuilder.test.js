import CountryResponseBuilder from "../src/countryResponseBuilder";

const countriesPayload = [
  { country: "US", languages: ["en"] },
  { country: "BE", languages: ["nl", "fr", "de"] },
  { country: "NL", languages: ["nl"] },
  { country: "DE", languages: ["de"] },
  { country: "ES", languages: ["es"] },
];

describe("CountryResponseBuilder", () => {
  it("should return the total number of countries", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder.getNumberOfCountries().build();

    expect(response).toEqual({ totalNumberOfCountries: 195 });
  });

  it("should return the country with the most languages and German", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder
      .getCountryWithMostLanguagesAndGerman()
      .build();

    expect(response).toEqual({
      countryWithMostLanguagesAndGerman: {
        country: "BE",
        languages: ["nl", "fr", "de"],
      },
    });
  });

  it("should return the list of official languages", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder.getOfficialLanguages().build();

    expect(response).toEqual({
      languages: ["en", "nl", "fr", "de", "es"],
    });
  });

  it("should return the country with the highest number of languages", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder
      .getCountryWithHighestNumberOfLanguages()
      .build();

    expect(response).toEqual({
      countryWithHighestNumberOfLanguages: {
        country: "BE",
        languages: ["nl", "fr", "de"],
      },
    });
  });

  it("should return the most common language", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder.getMostCommonLanguage().build();

    expect(response).toEqual({
      mostCommonLanguages: ["nl", "de"],
    });
  });

  it("should return a full response object", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder
      .getNumberOfCountries()
      .getCountryWithMostLanguagesAndGerman()
      .getOfficialLanguages()
      .getCountryWithHighestNumberOfLanguages()
      .getMostCommonLanguage()
      .build();

    expect(response).toBeDefined();
    expect(response).toHaveProperty("totalNumberOfCountries");
    expect(response).toHaveProperty("countryWithMostLanguagesAndGerman");
    expect(response).toHaveProperty("languages");
    expect(response).toHaveProperty("countryWithHighestNumberOfLanguages");
    expect(response).toHaveProperty("mostCommonLanguages");
  });

  it("should throw error when the constructor receives a invalid input", () => {
    expect(() => new CountryResponseBuilder("")).toThrow(
      "A valid countries array is required."
    );
  });

  it("should return an empty object when getListOfLanguages doesnt receive a valid input", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder._getLanguageFrequency("");
    expect(response).toEqual({});
  });

  it("should return an empty array when a country doesn't have language", () => {
    const countryResponseBuilder = new CountryResponseBuilder(countriesPayload);
    const response = countryResponseBuilder._getListOfLanguages([
      {
        country: "US",
      },
    ]);
    expect(response).toEqual([]);
  });
});
