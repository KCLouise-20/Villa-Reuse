export function renderProfile(profile) {
    document.getElementById("profile-avatar").textContent = profile.initials;
    document.getElementById("profile-name").textContent = profile.name;
    document.getElementById("profile-email").textContent = profile.email;
    document.getElementById("profile-meta").textContent =
        `${profile.neighborhood} · Member since ${profile.memberSince}`;
    document.getElementById("profile-balance").textContent = String(profile.coins);
    document.getElementById("header-balance").textContent = String(profile.coins);
    document.getElementById("figure-items").textContent = String(profile.itemsShared);
    document.getElementById("figure-waste").textContent = `${profile.wasteSavedKg} kg`;
}
