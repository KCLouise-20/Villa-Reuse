const ICONS = {
    leaf: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14z"/><path d="M5 19l7-7"/></svg>`,
    co2: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8" stroke-linecap="round"/></svg>`,
    chart: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V5M16 20v-6M22 20H2"/></svg>`,
};
const TREE = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1f7a3f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 6 11h3l-3 5h12l-3-5h3z"/><path d="M12 16v5"/></svg>`;
export function createStatCard(data) {
    const card = document.createElement("article");
    card.className = `stat-card${data.variant === "primary" ? " stat-card--primary" : ""}`;
    card.innerHTML = `
    <p class="stat-card__label">${ICONS[data.icon]} ${data.label}</p>
    <p class="stat-card__value">${data.value.toLocaleString()}<small>${data.unit}</small></p>
    <p class="stat-card__note">${data.note}</p>
    <div class="stat-card__track"><div class="stat-card__fill" style="width:${data.progress}%"></div></div>
    ${data.trees ? `<div class="trees-row">${TREE.repeat(7)}</div>` : ""}
  `;
    return card;
}
