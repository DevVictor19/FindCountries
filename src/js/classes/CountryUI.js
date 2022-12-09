export class CountryUI {
  #displayTarget;
  #storage = [];

  constructor(displayTarget) {
    this.#displayTarget = displayTarget;
  }

  appendOnDisplay(country) {
    const childNode = `
      <article id="${country.name}" class="flags-container__card">
        <img
          width="264"
          height="160"
          src="${country.flagUrl}"
          alt="${country.name}"
        />
        <div class="flags-container__card-info">
          <h1 class="flags-container__card-title">${country.name}</h1>
          <ul class="flags-container__card-list">
            <li><span>Population:</span> ${country.population}</li>
            <li><span>Region:</span> ${country.region}</li>
            <li><span>Capital:</span> ${country.capital}</li>
          </ul>
        </div>
      </article>
    `;

    this.#displayTarget.innerHTML += childNode;
  }

  filterCountriesByName(input) {
    if (input === "") {
      return this.#storage;
    }
    const regexp = new RegExp(`${input}`, "gi");

    return this.#storage.filter((country) => regexp.test(country.name));
  }

  filterCountriesByRegion(region) {
    if (region === "All") {
      return this.#storage;
    }

    return this.#storage.filter((country) => country.region === region);
  }

  saveOnStorage(country) {
    this.#storage.push(country);
  }

  resetDisplay() {
    this.#displayTarget.innerHTML = "";
  }
}
