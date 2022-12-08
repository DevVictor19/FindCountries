let dropdownIsOpen = false;

const dropdownOptions = document.getElementById("dropdownOptions");
const dropdownArrowIcon = document.getElementById("dropdownArrowIcon");

export function toggleDropdownAnimation() {
  if (dropdownIsOpen) {
    dropdownOptions.style.height = "0";
    dropdownArrowIcon.style.transform = "rotate(0deg)";

    setTimeout(() => {
      dropdownOptions.style.display = "none";
      dropdownIsOpen = false;
    }, 600);

    return;
  }

  dropdownOptions.style.display = "block";
  dropdownArrowIcon.style.transform = "rotate(180deg)";

  setTimeout(() => {
    dropdownOptions.style.height = "164px";
    dropdownIsOpen = true;
  });
}
