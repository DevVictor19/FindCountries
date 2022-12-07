let lastActiveOptionElement = null;

export function setActiveOptionStyleClass(event, activeClass) {
  if (lastActiveOptionElement) {
    lastActiveOptionElement.classList.remove(activeClass);
  }

  lastActiveOptionElement = event.target;
  event.target.classList.add(activeClass);
}
