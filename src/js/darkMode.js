import darkModeOnIcon from "../assets/dark-on.svg";
import darkModeOffIcon from "../assets/dark-off.svg";
import arrowLight from "../assets/arrow-dark-on.svg";
import arrowDark from "../assets/arrow-dark-off.svg";
import { darkTheme, lightTheme } from "./themes";

const storageName = "lastThemeName";

const themesName = {
  dark: "dark",
  light: "light",
};

let currentThemeName = localStorage.getItem(storageName) ?? themesName.light;

export function setTheme() {
  const currentTheme =
    currentThemeName === themesName.light ? lightTheme : darkTheme;

  for (let prop in currentTheme) {
    document.documentElement.style.setProperty(prop, currentTheme[prop]);
  }
}

export function setIcons() {
  const arrowIcon =
    currentThemeName === themesName.light ? arrowDark : arrowLight;

  const darkModeIcon =
    currentThemeName === themesName.light ? darkModeOffIcon : darkModeOnIcon;

  document.getElementById("dropdownArrowIcon").src = arrowIcon;
  document.getElementById("darkModeIcon").src = darkModeIcon;
}

export function swapTheme() {
  if (currentThemeName === themesName.light) {
    currentThemeName = themesName.dark;
  } else {
    currentThemeName = themesName.light;
  }

  localStorage.setItem(storageName, currentThemeName);
  setTheme();
  setIcons();
}
