import { ITEMS } from "./data/items.js";
import { FilterStore } from "./state/store.js";
import { mountFilterChips } from "./components/filterChips.js";
import { mountSearchBar } from "./components/searchBar.js";
import { filterItems, renderItemGrid } from "./components/itemGrid.js";
function requireElement(id) {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Missing element #${id}`);
    return el;
}
function bootstrap() {
    const grid = requireElement("item-grid");
    const counter = requireElement("item-count");
    const chips = requireElement("filter-chips");
    const search = requireElement("search-input");
    const store = new FilterStore();
    const setActiveChip = mountFilterChips(chips, (category) => store.update({ category }));
    mountSearchBar(search, (query) => store.update({ query }));
    store.subscribe((state) => {
        setActiveChip(state.category);
        renderItemGrid(grid, counter, filterItems(ITEMS, state));
    });
    // Navigate the hero button to the donate page.
    document.getElementById("donate-btn")?.addEventListener("click", () => {
        window.location.href = "donate.html";
    });
    // Initial render
    setActiveChip("All");
    renderItemGrid(grid, counter, ITEMS);
}
bootstrap();
