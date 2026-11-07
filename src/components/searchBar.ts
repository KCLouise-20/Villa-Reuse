export function mountSearchBar(
  input: HTMLInputElement,
  onChange: (query: string) => void,
): void {
  input.addEventListener("input", () => onChange(input.value));
}
