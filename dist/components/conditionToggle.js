const CONDITIONS = ["Fair", "Good", "Like new"];
export function mountConditionToggle(container, onChange, initial = "Good") {
    let selected = initial;
    const buttons = new Map();
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
    function sync() {
        buttons.forEach((btn, name) => {
            const active = name === selected;
            btn.classList.toggle("segmented__option--active", active);
            btn.setAttribute("aria-checked", String(active));
        });
    }
    sync();
    return () => selected;
}
