export function mountSearchBar(input, onChange) {
    input.addEventListener("input", () => onChange(input.value));
}
