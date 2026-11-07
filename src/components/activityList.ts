import type { ActivityEntry } from "../data/profileData.js";

const ICONS: Record<ActivityEntry["icon"], string> = {
  leaf: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c0-8 5-13 14-14 0 9-5 14-14 14z"/><path d="M5 19l7-7"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 20s-7-4.6-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.4 12 20 12 20z"/></svg>`,
  coin: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4" stroke-linecap="round"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
};

const CHEVRON = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`;

export function createActivityRow(entry: ActivityEntry): HTMLElement {
  const li = document.createElement("li");
  const row = document.createElement("button");
  row.type = "button";
  row.className = "activity-row";
  row.dataset.id = entry.id;
  row.innerHTML = `
    <span class="activity-row__icon">${ICONS[entry.icon]}</span>
    <span>
      <span class="activity-row__title">${entry.title}</span>
      <p class="activity-row__note">${entry.note}</p>
    </span>
    ${entry.count !== undefined ? `<span class="activity-row__badge">${entry.count}</span>` : "<span></span>"}
    <span class="activity-row__chevron">${CHEVRON}</span>
  `;
  li.append(row);
  return li;
}
