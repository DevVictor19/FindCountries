import "./styles.css";
import { toggleDropdownAnimation } from "./js/dropdown";
import { setActiveOptionStyleClass } from "./js/setActiveOptionStyleClass";

const dropdownButton = document.getElementById("dropdownButton");
dropdownButton.addEventListener("click", toggleDropdownAnimation);

const dropdownOptions = document.querySelectorAll(
  ".actions__dropdown-options-item"
);

dropdownOptions.forEach((item) => {
  item.addEventListener("click", (event) => {
    setActiveOptionStyleClass(event, "--options-item-active");
  });
});
