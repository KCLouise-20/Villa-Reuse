import { PROFILE, ACTIVITY } from "./data/profileData.js";
import { renderProfile } from "./components/profileCard.js";
import { createActivityRow } from "./components/activityList.js";
function requireElement(id) {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Missing element #${id}`);
    return el;
}
function bootstrap() {
    renderProfile(PROFILE);
    const list = requireElement("activity-list");
    list.append(...ACTIVITY.map(createActivityRow));
    list.addEventListener("click", (event) => {
        const row = event.target.closest(".activity-row");
        if (row)
            console.log("Open activity:", row.dataset.id);
    });
    requireElement("edit-profile").addEventListener("click", () => {
        console.log("Edit profile");
    });
    requireElement("logout-btn").addEventListener("click", () => {
        if (confirm("Log out of Villa-Reuse?"))
            window.location.href = "index.html";
    });
}
bootstrap();
