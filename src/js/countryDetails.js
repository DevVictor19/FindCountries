import { numberWithCommas } from "./utils/numberWithCommas";

const contentEl = document.getElementById("content");

function createCountryDetailsEl(country) {
  let borders = "";
  let currencies = "";
  let languages = "";

  country.borders?.forEach((borderCountry) => {
    borders += `<li class="country-details__border-countries-item">${borderCountry}</li>`;
  });

  for (let currency in country.currencies) {
    currencies += `${country.currencies[currency].name}, `;
  }

  for (let language in country.languages) {
    languages += `${country.languages[language]}, `;
  }

  const nativeName =
    country.nativeName[Object.keys(country.nativeName)[0]].common;

  return `
   <div id="countryDetails" class="country-details">
    <button id="backButton" type="button" class="country-details__button">
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" fill="#111517"/>
      </svg>
      Back
    </button>
    <article class="country-details__article">
      <div class="country-details__img"> 
        <img width="560" height="400" src="${country.flagUrl}" alt="${
    country.name
  }" />
      </div>
      <div class="country-details__info">
        <h1 class="country-details__info-title">${country.name}</h1>
        <div class="country-details__info-lists">
          <ul class="country-details__info-list">
            <li class="country-details__info-item">
              <span>Native Name: </span>${nativeName}
            </li>
            <li class="country-details__info-item">
              <span>Population: </span>${numberWithCommas(country.population)} 
            </li>
            <li class="country-details__info-item">
              <span>Region: </span>${country.region}
            </li>
            <li class="country-details__info-item">
              <span>Sub Region: </span>${country.subregion} 
            </li>
            <li class="country-details__info-item">
              <span>Capital: </span>${country.capital}
            </li>
          </ul>
          <ul class="country-details__info-list">
            <li class="country-details__info-item">
              <span>Top Level Domain: </span>${country.tld}
            </li>
            <li class="country-details__info-item">
              <span>Currencies: </span>${currencies.slice(
                0,
                currencies.length - 2
              )}
            </li>
            <li class="country-details__info-item">
              <span>Languages: </span>${languages.slice(
                0,
                languages.length - 2
              )}
            </li>
          </ul>
        </div>
        ${
          country.borders
            ? `
              <div class="country-details__border-countries">
                <h2 class="country-details__border-countries-title">
                  Border Countries:
                </h2>
                <ul class="country-details__border-countries-list">
                  ${borders}
                </ul>
              </div>
              `
            : ""
        }
       </div>
      </article>
    </div>
  `;
}

let countryDetailsIsOpen = false;

export function toggleCountryDetails(country) {
  if (countryDetailsIsOpen) {
    const countryDetailsEl = document.getElementById("countryDetails");
    contentEl.removeChild(countryDetailsEl);
    contentEl.style.height = "auto";
    countryDetailsIsOpen = false;
    return;
  }

  countryDetailsIsOpen = true;
  contentEl.insertAdjacentHTML("afterbegin", createCountryDetailsEl(country));

  contentEl.style.height = `${
    document.getElementById("countryDetails").offsetHeight
  }px`;

  document
    .getElementById("backButton")
    .addEventListener("click", toggleCountryDetails);
}
