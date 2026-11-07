export function createQrPattern(seed) {
    // Deterministic 8x8 grid painted as an SVG data URI — a visual stand-in,
    // not a scannable QR code. Replace with a real encoder when available.
    const cells = [];
    for (let i = 0; i < 64; i++) {
        const ch = seed.charCodeAt(i % seed.length) + i * 7;
        const on = (ch * 31) % 4 < 2;
        if (!on)
            continue;
        const x = i % 8;
        const y = Math.floor(i / 8);
        cells.push(`<rect x="${x * 10}" y="${y * 10}" width="10" height="10"/>`);
    }
    const svg = `<svg xmlns="[w3.org](http://www.w3.org/2000/svg)" viewBox="0 0 80 80"><rect width="80" height="80" fill="#fff"/><g fill="#14231a">${cells.join("")}</g></svg>`;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
}
export function renderChainStats(container, stats) {
    container.replaceChildren(...stats.map(({ value, label }) => {
        const wrap = document.createElement("div");
        wrap.className = "chain-stats__item";
        wrap.innerHTML = `<dt class="chain-stats__value">${value}</dt><dd class="chain-stats__label">${label}</dd>`;
        return wrap;
    }));
}
