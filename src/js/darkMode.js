import darkModeOnIcon from "../assets/dark-on.svg";
import darkModeOffIcon from "../assets/dark-off.svg";
import arrowLight from "../assets/arrow-dark-on.svg";
import arrowDark from "../assets/arrow-dark-off.svg";

const lightTheme = {
  "--bg-color": "#f2f2f2",
  "--el-color": "#ffffff",
  "--tx-color": "#111517",
  "--tx-color-ligther": "#848484",
  "--sh-color": "#0000000e",
  "--options-item-active-color": "blue",
};

const darkTheme = {
  "--bg-color": "#202C36",
  "--el-color": "#2B3844",
  "--tx-color": "#FFFFFF",
  "--tx-color-ligther": "#FFFFFF",
  "--sh-color": "#00000007",
  "--options-item-active-color": "green",
};

const storageName = "lastThemeName";

const themeNames = {
  dark: "dark",
  light: "light",
};

let currentThemeName = localStorage.getItem(storageName) ?? themeNames.light;

export function setTheme() {
  const currentTheme =
    currentThemeName === themeNames.light ? lightTheme : darkTheme;

  for (let prop in currentTheme) {
    document.documentElement.style.setProperty(prop, currentTheme[prop]);
  }
}

export function setIcons() {
  const arrowIcon =
    currentThemeName === themeNames.light ? arrowDark : arrowLight;

  const darkModeIcon =
    currentThemeName === themeNames.light ? darkModeOffIcon : darkModeOnIcon;

  document.getElementById("arrowIcon").src = arrowIcon;
  document.getElementById("darkModeIcon").src = darkModeIcon;
}

export function swapTheme() {
  if (currentThemeName === themeNames.light) {
    currentThemeName = themeNames.dark;
  } else {
    currentThemeName = themeNames.light;
  }

  localStorage.setItem(storageName, currentThemeName);
  setTheme();
  setIcons();
}
