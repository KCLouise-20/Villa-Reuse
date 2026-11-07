const BASE = {
    Clothes: 20,
    Appliances: 40,
    Books: 15,
    Others: 30,
};
const CONDITION_FACTOR = {
    Fair: 0.7,
    Good: 1,
    "Like new": 1.3,
};
export function estimateCoins(category, condition) {
    const base = BASE[category] ?? 20;
    return Math.round(base * CONDITION_FACTOR[condition]);
}
