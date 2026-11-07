import type { CategoryFilter } from "../types.js";

const FILTERS: CategoryFilter[] = ["All", "Clothes", "Appliances", "Books", "Others"];

export function mountFilterChips(
  container: HTMLElement,
  onSelect: (category: CategoryFilter) => void,
): (active: CategoryFilter) => void {
  const buttons = new Map<CategoryFilter, HTMLButtonElement>();

  FILTERS.forEach((name) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = name;
    btn.setAttribute("role", "tab");
    btn.addEventListener("click", () => onSelect(name));
    buttons.set(name, btn);
    container.append(btn);
  });

  return (active) => {
    buttons.forEach((btn, name) => {
      const isActive = name === active;
      btn.classList.toggle("chip--active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });
  };
}
