const CONDITIONS = ["Fair", "Good", "Like new"] as const;

export type Condition = (typeof CONDITIONS)[number];

export function mountConditionToggle(
  container: HTMLElement,
  onChange: (condition: Condition) => void,
  initial: Condition = "Good",
): () => Condition {
  let selected: Condition = initial;
  const buttons = new Map<Condition, HTMLButtonElement>();

  CONDITIONS.forEach((name) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "segmented__option";
    btn.textContent = name;
    btn.setAttribute("role", "radio");
    btn.addEventListener("click", () => {
      selected = name;
      sync();
      onChange(selected);
    });
    buttons.set(name, btn);
    container.append(btn);
  });

  function sync(): void {
    buttons.forEach((btn, name) => {
      const active = name === selected;
      btn.classList.toggle("segmented__option--active", active);
      btn.setAttribute("aria-checked", String(active));
    });
  }

  sync();
  return () => selected;
}
