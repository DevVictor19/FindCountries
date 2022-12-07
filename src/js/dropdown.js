let dropdownIsOpen = false;

const dropdownOptions = document.getElementById("dropdownOptions");
const dropdownImg = document.getElementById("dropdownImg");

export function toggleDropdownAnimation() {
  if (dropdownIsOpen) {
    dropdownOptions.style.height = "0";
    dropdownImg.style.transform = "rotate(0deg)";

    setTimeout(() => {
      dropdownOptions.style.display = "none";
      dropdownIsOpen = false;
    }, 600);

    return;
  }

  dropdownOptions.style.display = "block";
  dropdownImg.style.transform = "rotate(180deg)";

  setTimeout(() => {
    dropdownOptions.style.height = "164px";
    dropdownIsOpen = true;
  });
}
