export function parseCountrySchema(data) {
  return {
    name: data.name.common,
    region: data.region,
    population: data.population,
    subregion: data.subregion,
    capital: data.capital,
    nativeName: data.name.nativeName,
    currencies: data.currencies,
    languages: data.languages,
    tld: data.tld,
    borders: data.borders,
    flagUrl: data.flags.svg,
  };
}
