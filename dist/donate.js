import { mountPhotoUploader } from "./components/photoUploader.js";
import { mountConditionToggle } from "./components/conditionToggle.js";
import { estimateCoins } from "./components/coinEstimator.js";
function requireElement(id) {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Missing element #${id}`);
    return el;
}
function bootstrap() {
    const form = requireElement("donate-form");
    const zone = requireElement("upload-zone");
    const photoInput = requireElement("photo-input");
    const preview = requireElement("photo-preview");
    const uploadLabel = requireElement("upload-label");
    const conditionGroup = requireElement("condition-group");
    const category = requireElement("category");
    const nameInput = requireElement("item-name");
    const story = requireElement("story");
    const coinAmount = requireElement("coin-amount");
    const earnAmount = requireElement("earn-amount");
    const uploader = mountPhotoUploader(zone, photoInput, preview, uploadLabel, (msg) => {
        alert(msg);
    });
    function refreshCoins() {
        const value = estimateCoins(category.value, getCondition());
        const text = String(value);
        coinAmount.textContent = text;
        earnAmount.textContent = text;
    }
    const getCondition = mountConditionToggle(conditionGroup, refreshCoins);
    category.addEventListener("change", refreshCoins);
    requireElement("cancel-btn").addEventListener("click", () => {
        window.location.href = "index.html";
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (nameInput.value.trim() === "") {
            nameInput.focus();
            alert("Please enter an item name.");
            return;
        }
        const payload = {
            itemName: nameInput.value.trim(),
            category: category.value,
            condition: getCondition(),
            story: story.value.trim(),
            photo: uploader.getFile()?.name ?? null,
            coins: Number(coinAmount.textContent),
        };
        console.log("Donation payload", payload);
        alert(`Thanks! Your donation is queued for ${payload.coins} Coins.`);
        window.location.href = "index.html";
    });
    refreshCoins();
}
bootstrap();
