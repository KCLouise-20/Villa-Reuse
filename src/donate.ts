import { mountPhotoUploader } from "./components/photoUploader.js";
import { mountConditionToggle } from "./components/conditionToggle.js";
import type { Condition } from "./components/conditionToggle.js";
import { estimateCoins } from "./components/coinEstimator.js";

function requireElement<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el as T;
}

function bootstrap(): void {
  const form = requireElement<HTMLFormElement>("donate-form");
  const zone = requireElement<HTMLElement>("upload-zone");
  const photoInput = requireElement<HTMLInputElement>("photo-input");
  const preview = requireElement<HTMLImageElement>("photo-preview");
  const uploadLabel = requireElement<HTMLElement>("upload-label");
  const conditionGroup = requireElement<HTMLElement>("condition-group");
  const category = requireElement<HTMLSelectElement>("category");
  const nameInput = requireElement<HTMLInputElement>("item-name");
  const story = requireElement<HTMLTextAreaElement>("story");
  const coinAmount = requireElement<HTMLElement>("coin-amount");
  const earnAmount = requireElement<HTMLElement>("earn-amount");

  const uploader = mountPhotoUploader(zone, photoInput, preview, uploadLabel, (msg) => {
    alert(msg);
  });

  function refreshCoins(): void {
    const value = estimateCoins(category.value, getCondition());
    const text = String(value);
    coinAmount.textContent = text;
    earnAmount.textContent = text;
  }

  const getCondition = mountConditionToggle(conditionGroup, refreshCoins);
  category.addEventListener("change", refreshCoins);

  requireElement<HTMLButtonElement>("cancel-btn").addEventListener("click", () => {
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
      condition: getCondition() as Condition,
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
