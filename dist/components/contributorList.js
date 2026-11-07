export function createContributorRow(person, index) {
    const li = document.createElement("li");
    li.className = `contributor${person.isSelf ? " contributor--self" : ""}`;
    li.innerHTML = `
    <span class="contributor__rank">${String(index + 1).padStart(2, "0")}</span>
    <span class="contributor__avatar">${person.initials}</span>
    <span>
      <span class="contributor__name">${person.name}</span>
      <p class="contributor__items">${person.itemsReused} items reused</p>
    </span>
    <span class="contributor__figures">
      <span class="contributor__figure">${person.kgSaved}<span>kg saved</span></span>
      <span class="contributor__figure">${person.coins}<span>coins</span></span>
    </span>
  `;
    return li;
}
