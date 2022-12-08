let lastActiveOptionElement = null;

export function setActiveOptionStyleClass(element, activeClass) {
  if (lastActiveOptionElement) {
    lastActiveOptionElement.classList.remove(activeClass);
  }

  lastActiveOptionElement = element;
  element.classList.add(activeClass);
}
