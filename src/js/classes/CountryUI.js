import { numberWithCommas } from "../utils/numberWithCommas";

export class CountryUI {
  #displayTarget;

  constructor(displayTarget) {
    this.#displayTarget = displayTarget;
  }

  appendOnDisplay(country) {
    const population = numberWithCommas(country.population);

    const childNode = `
      <article id="${country.name}" class="flags-container__card">
        <img
          width="264"
          height="160"
          src="${country.flagUrl}"
          alt="${country.name}"
          loading="lazy"
        />
        <div class="flags-container__card-info">
          <h1 class="flags-container__card-title">${country.name}</h1>
          <ul class="flags-container__card-list">
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
