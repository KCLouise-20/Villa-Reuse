import { createItemCard } from "./itemCard.js";
export function filterItems(items, { category, query }) {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
        const matchesCategory = category === "All" || item.category === category;
        const matchesQuery = q === "" ||
            item.title.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q);
        return matchesCategory && matchesQuery;
    });
}
export function renderItemGrid(grid, counter, items) {
    grid.replaceChildren();
    if (items.length === 0) {
        const empty = document.createElement("p");
        empty.className = "grid__empty";
        empty.textContent = "No items match your search.";
        grid.append(empty);
    }
    else {
        grid.append(...items.map(createItemCard));
    }
    counter.textContent = `${items.length} ${items.length === 1 ? "item" : "items"}`;
}
