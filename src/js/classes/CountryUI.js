import { numberWithCommas } from "../utils/numberWithCommas";

export class CountryUI {
  #displayTarget;

  constructor(displayTarget) {
    this.#displayTarget = displayTarget;
  }

  appendOnDisplay(country) {
    const population = numberWithCommas(country.population);

    const childNode = `
      <article class="countries-container__card">
        <div id="${country.name}" class="countries-container__overlay"></div>
        <img
          width="264"
          height="160"
          src="${country.flagUrl}"
          alt="${country.name}"
          loading="lazy"
        />
        <div class="countries-container__card-info">
          <h1 class="countries-container__card-title">${country.name}</h1>
          <ul class="countries-container__card-list">
            <li><span>Population:</span> ${population}</li>
            <li><span>Region:</span> ${country.region}</li>
            <li><span>Capital:</span> ${country.capital}</li>
          </ul>
        </div>
      </article>
    `;

    this.#displayTarget.innerHTML += childNode;
  }

  resetDisplay() {
    this.#displayTarget.innerHTML = "";
  }
}
