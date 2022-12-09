import "./styles.css";

import { toggleDropdownAnimation } from "./js/dropdown";
import { setIcons, setTheme, swapTheme } from "./js/darkMode";
import { CountryUI } from "./js/classes/CountryUI";
import { Api } from "./js/classes/Api";
import { parseCountrySchema } from "./js/utils/parseCountrySchema";
import { debounce } from "./js/utils/debounceFn";

// elements
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const darkModeBtn = document.getElementById("darkModeBtn");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");

// classes
const countryUI = new CountryUI(document.getElementById("flagsContainer"));
const api = new Api("https://restcountries.com/v3.1/");

// functions
function populateDisplay(data) {
  data.forEach((item) => {
    countryUI.appendOnDisplay(item);
  });
}

const debouncedSearchByName = debounce((input) => {
  const result = countryUI.filterCountriesByName(input);

  if (result.length === 0) {
    alert("Oops... we didn't find any results");
    return;
  }

  countryUI.resetDisplay();
  populateDisplay(result);
}, 1000);

// events
dropdownButton.addEventListener("click", toggleDropdownAnimation);
darkModeBtn.addEventListener("click", swapTheme);

dropdownOptions.addEventListener("click", (event) => {
  const target = event.target;

  if (target === dropdownOptions) return;

  countryUI.resetDisplay();
  populateDisplay(countryUI.filterCountriesByRegion(event.target.innerText));
  toggleDropdownAnimation();
});

searchInput.addEventListener("input", (event) => {
  debouncedSearchByName(event.target.value);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  debouncedSearchByName(searchInput.value);
});

window.addEventListener("load", () => {
  setTheme();
  setIcons();

  api.get("all").then((data) => {
    data.forEach((country) => {
      const newCountry = parseCountrySchema(country);
      countryUI.appendOnDisplay(newCountry);
      countryUI.saveOnStorage(newCountry);
    });
  });
});
