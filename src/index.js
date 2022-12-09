import "./styles.css";

import { toggleDropdownAnimation } from "./js/dropdown";
import { setActiveOptionStyleClass } from "./js/utils/setActiveOptionStyleClass";
import { setIcons, setTheme, swapTheme } from "./js/darkMode";
import { CountryUI } from "./js/classes/CountryUI";
import { Api } from "./js/classes/Api";
import { parseCountrySchema } from "./js/utils/parseCountrySchema";

// elements and classes
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");
const darkModeBtn = document.getElementById("darkModeBtn");

const countryUI = new CountryUI(document.getElementById("flagsContainer"));
const api = new Api("https://restcountries.com/v3.1/");

// events
dropdownButton.addEventListener("click", toggleDropdownAnimation);
darkModeBtn.addEventListener("click", swapTheme);

dropdownOptions.addEventListener("click", (event) => {
  const target = event.target;

  if (target === dropdownOptions) return;

  countryUI.resetDisplay();
  toggleDropdownAnimation();

  if (target.innerText === "All") {
    api.get("all").then((data) => {
      data.forEach((item) => {
        countryUI.appendOnDisplay(parseCountrySchema(item));
      });
    });
    return;
  }

  api.get("region/" + target.innerText).then((data) => {
    data.forEach((item) => {
      countryUI.appendOnDisplay(parseCountrySchema(item));
    });
  });
});

window.addEventListener("load", () => {
  setTheme();
  setIcons();
  api.get("all").then((data) => {
    data.forEach((item) => {
      countryUI.appendOnDisplay(parseCountrySchema(item));
    });
  });
});
