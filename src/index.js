import "./styles.css";

import { toggleDropdownAnimation } from "./js/dropdown";
import { setActiveOptionStyleClass } from "./js/utils/setActiveOptionStyleClass";
import { setIcons, setTheme, swapTheme } from "./js/darkMode";
import { CountryUI } from "./js/classes/CountryUI";
import { Api } from "./js/classes/Api";
import { parseCountrySchema } from "./js/utils/parseCountrySchema";

// elements and classes
const dropdownButton = document.getElementById("dropdownButton");

const dropdownOptions = document.querySelectorAll(
  ".actions__dropdown-options-item"
);

const darkModeBtn = document.getElementById("darkModeBtn");

const countryUI = new CountryUI(document.getElementById("flagsContainer"));
const api = new Api("https://restcountries.com/v3.1/");

// events
dropdownButton.addEventListener("click", toggleDropdownAnimation);

dropdownOptions.forEach((item) => {
  item.addEventListener("click", (event) => {
    setActiveOptionStyleClass(event.target, "--options-item-active");
    toggleDropdownAnimation();
    countryUI.resetDisplay();

    const selectedOptionValue = event.target.innerText;

    if (selectedOptionValue === "All") {
      api.get("all").then((data) => {
        data.forEach((item) => {
          countryUI.appendOnDisplay(parseCountrySchema(item));
        });
      });
      return;
    }

    api.get("region/" + selectedOptionValue).then((data) => {
      data.forEach((item) => {
        countryUI.appendOnDisplay(parseCountrySchema(item));
      });
    });
  });
});

darkModeBtn.addEventListener("click", swapTheme);

window.addEventListener("load", () => {
  setActiveOptionStyleClass(dropdownOptions[0], "--options-item-active");
  setTheme();
  setIcons();
  api.get("all").then((data) => {
    data.forEach((item) => {
      countryUI.appendOnDisplay(parseCountrySchema(item));
    });
  });
});
