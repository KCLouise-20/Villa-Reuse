import { PROFILE, ACTIVITY } from "./data/profileData.js";
import { renderProfile } from "./components/profileCard.js";
import { createActivityRow } from "./components/activityList.js";

function requireElement<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el as T;
}

function bootstrap(): void {
  renderProfile(PROFILE);

  const list = requireElement<HTMLUListElement>("activity-list");
  list.append(...ACTIVITY.map(createActivityRow));

  list.addEventListener("click", (event) => {
    const row = (event.target as HTMLElement).closest<HTMLButtonElement>(".activity-row");
    if (row) console.log("Open activity:", row.dataset.id);
  });

  requireElement<HTMLButtonElement>("edit-profile").addEventListener("click", () => {
    console.log("Edit profile");
  });

  requireElement<HTMLButtonElement>("logout-btn").addEventListener("click", () => {
    if (confirm("Log out of Villa-Reuse?")) window.location.href = "index.html";
  });
}

bootstrap();
