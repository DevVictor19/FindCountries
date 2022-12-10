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
    countryUI.appendOnDisplay(parseCountrySchema(item));
  });
}

const debounceGet = debounce(async (input) => {
  let result = input === "" ? api.get("all") : api.get("name/" + input);

  const data = await result;

  if (data.length === 0) {
    alert("Oops... we didn't find any results");
    return;
  }

  countryUI.resetDisplay();
  populateDisplay(data);
}, 1000);

// events
dropdownButton.addEventListener("click", toggleDropdownAnimation);
darkModeBtn.addEventListener("click", swapTheme);

dropdownOptions.addEventListener("click", (event) => {
  const target = event.target;

  if (target === dropdownOptions) return;

  countryUI.resetDisplay();
  toggleDropdownAnimation();

  if (target.innerText === "All") {
    api.get("all").then(populateDisplay);
    return;
  }

  api.get("region/" + target.innerText).then(populateDisplay);
});

searchInput.addEventListener("input", (event) => {
  debounceGet(event.target.value);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  debounceGet(searchInput.value);
});

window.addEventListener("load", () => {
  setTheme();
  setIcons();

  api.get("all").then(populateDisplay);
});
