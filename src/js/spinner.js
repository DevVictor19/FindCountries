const backdrop = document.getElementById("backdrop");

const spinner = `
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
  </div>`;

let backdropIsOn = false;

export function toggleSpinner() {
  if (backdropIsOn) {
    backdrop.style.display = "none";
    backdrop.innerHTML = "";
    backdropIsOn = false;
    return;
  }

  backdrop.style.display = "block";
  backdrop.innerHTML = spinner;
  backdropIsOn = true;
}
