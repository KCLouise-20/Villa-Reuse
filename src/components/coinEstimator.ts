import type { Condition } from "./conditionToggle.js";

const BASE: Record<string, number> = {
  Clothes: 20,
  Appliances: 40,
  Books: 15,
  Others: 30,
};

const CONDITION_FACTOR: Record<Condition, number> = {
  Fair: 0.7,
  Good: 1,
  "Like new": 1.3,
};

export function estimateCoins(category: string, condition: Condition): number {
  const base = BASE[category] ?? 20;
  return Math.round(base * CONDITION_FACTOR[condition]);
}
