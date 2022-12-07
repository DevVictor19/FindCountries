import "./styles.css";
import { toggleDropdownAnimation } from "./js/dropdown";

const dropdownButton = document.getElementById("dropdownButton");
dropdownButton.addEventListener("click", toggleDropdownAnimation);
