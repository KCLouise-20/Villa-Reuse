import { STAT_CARDS, CONTRIBUTORS, CHAIN_STATS, CHAIN_ID, PERIOD_LABEL } from "./data/impactData.js";
import { createStatCard } from "./components/statCard.js";
import { createContributorRow } from "./components/contributorList.js";
import { createQrPattern, renderChainStats } from "./components/chainStats.js";

function requireElement<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el as T;
}

function bootstrap(): void {
  const statRow = requireElement<HTMLElement>("stat-row");
  const list = requireElement<HTMLOListElement>("contributor-list");
  const qr = requireElement<HTMLElement>("qr-code");
  const chainStats = requireElement<HTMLElement>("chain-stats");
  const periodBadge = document.querySelector<HTMLElement>(".period-badge");

  statRow.append(...STAT_CARDS.map(createStatCard));
  list.append(...CONTRIBUTORS.map(createContributorRow));
  renderChainStats(chainStats, CHAIN_STATS);
  qr.style.backgroundImage = createQrPattern(CHAIN_ID);
  if (periodBadge) periodBadge.textContent = PERIOD_LABEL;
}

bootstrap();
