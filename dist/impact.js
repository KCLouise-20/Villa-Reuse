import { STAT_CARDS, CONTRIBUTORS, CHAIN_STATS, CHAIN_ID, PERIOD_LABEL } from "./data/impactData.js";
import { createStatCard } from "./components/statCard.js";
import { createContributorRow } from "./components/contributorList.js";
import { createQrPattern, renderChainStats } from "./components/chainStats.js";
function requireElement(id) {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Missing element #${id}`);
    return el;
}
function bootstrap() {
    const statRow = requireElement("stat-row");
    const list = requireElement("contributor-list");
    const qr = requireElement("qr-code");
    const chainStats = requireElement("chain-stats");
    const periodBadge = document.querySelector(".period-badge");
    statRow.append(...STAT_CARDS.map(createStatCard));
    list.append(...CONTRIBUTORS.map(createContributorRow));
    renderChainStats(chainStats, CHAIN_STATS);
    qr.style.backgroundImage = createQrPattern(CHAIN_ID);
    if (periodBadge)
        periodBadge.textContent = PERIOD_LABEL;
}
bootstrap();
