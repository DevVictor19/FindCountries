import "./styles.css";

import { toggleDropdownAnimation } from "./js/dropdown";
import { setActiveOptionStyleClass } from "./js/setActiveOptionStyleClass";
import { setIcons, setTheme, swapTheme } from "./js/darkMode";

const dropdownButton = document.getElementById("dropdownButton");
dropdownButton.addEventListener("click", toggleDropdownAnimation);

const dropdownOptions = document.querySelectorAll(
  ".actions__dropdown-options-item"
);

dropdownOptions.forEach((item) => {
  item.addEventListener("click", (event) => {
    setActiveOptionStyleClass(event.target, "--options-item-active");
  });
});

const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", swapTheme);

window.addEventListener("load", () => {
  setActiveOptionStyleClass(dropdownOptions[0], "--options-item-active");
  setTheme();
  setIcons();
});
