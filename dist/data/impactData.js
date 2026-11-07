export const STAT_CARDS = [
    {
        id: "waste",
        label: "Total waste saved",
        value: 1200,
        unit: "kg",
        note: "12% more than last month",
        progress: 72,
        variant: "primary",
        icon: "leaf",
    },
    {
        id: "emissions",
        label: "Emissions avoided",
        value: 840,
        unit: "kg",
        note: "Equivalent carbon savings",
        progress: 62,
        variant: "default",
        icon: "co2",
    },
    {
        id: "trees",
        label: "Trees equivalent",
        value: 42,
        unit: "trees",
        note: "Growing for one full year",
        progress: 55,
        variant: "default",
        icon: "chart",
        trees: true,
    },
];
export const CONTRIBUTORS = [
    { id: 1, name: "Maya K.", initials: "MK", itemsReused: 24, kgSaved: 320, coins: 240 },
    { id: 2, name: "Omar T.", initials: "OT", itemsReused: 18, kgSaved: 210, coins: 160 },
    { id: 3, name: "You", initials: "YO", itemsReused: 9, kgSaved: 120, coins: 95, isSelf: true },
];
export const CHAIN_STATS = [
    { value: "12", label: "people in chain" },
    { value: "5", label: "times reused" },
    { value: "18 kg", label: "waste avoided" },
];
export const CHAIN_ID = "7821";
export const PERIOD_LABEL = "May 2025";
