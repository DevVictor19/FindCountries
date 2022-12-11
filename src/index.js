import "./styles.css";

import { CountryUI } from "./js/classes/CountryUI";
import { Api } from "./js/classes/Api";
import { toggleDropdownAnimation } from "./js/dropdown";
import { setIcons, setTheme, swapTheme } from "./js/darkMode";
import { toggleSpinner } from "./js/spinner";
import { toggleCountryDetails } from "./js/countryDetails";
import { parseCountrySchema } from "./js/utils/parseCountrySchema";
import { makeFriendlyUrl } from "./js/utils/makeFriendlyUrl";

// elements
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const darkModeBtn = document.getElementById("darkModeBtn");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const countriesContainer = document.getElementById("countriesContainer");

// classes
const countryUI = new CountryUI(document.getElementById("countriesContainer"));
const api = new Api("https://restcountries.com/v3.1/");

// functions
function populateDisplay(data) {
  data.forEach((item) => {
    countryUI.appendOnDisplay(parseCountrySchema(item));
  });
}

// events
dropdownButton.addEventListener("click", toggleDropdownAnimation);
darkModeBtn.addEventListener("click", swapTheme);

dropdownOptions.addEventListener("click", (event) => {
  const target = event.target;

  if (target === dropdownOptions) return;

  countryUI.resetDisplay();
  toggleDropdownAnimation();
  toggleSpinner();

  if (target.innerText === "All") {
    api
      .get("all")
      .then(populateDisplay)
      .then(() => toggleSpinner());
    return;
  }

  api
    .get("region/" + target.innerText)
    .then(populateDisplay)
    .then(() => toggleSpinner());
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = searchInput.value.trim().replace(/[^A-Za-z ]/g, "");

  if (inputValue === "") {
    alert(
      "Please enter a valid country name. (do not leave the field empty either)"
    );
    return;
  }

  searchInput.value = "";
  toggleSpinner();
  api
    .get("name/" + inputValue)
    .then((data) => {
      if (data.length === 0) {
        alert("Oops... we didn't find any results");
        return;
      }

      countryUI.resetDisplay();
      populateDisplay(data);
    })
    .then(() => toggleSpinner());
});

countriesContainer.addEventListener("click", (event) => {
  if (event.target === countriesContainer) return;

  const flagName = event.target.id;

  toggleSpinner();
  api
    .get("name/" + makeFriendlyUrl(flagName) + "?fullText=true")
    .then((data) => parseCountrySchema(data[0]))
    .then(toggleCountryDetails)
    .then(() => toggleSpinner());
});

window.addEventListener("load", () => {
  setTheme();
  setIcons();

  toggleSpinner();
  api
    .get("all")
    .then(populateDisplay)
    .then(() => toggleSpinner());
});
