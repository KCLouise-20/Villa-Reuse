import type { FilterState } from "../types.js";

type Listener = (state: FilterState) => void;

export class FilterStore {
  private state: FilterState = { category: "All", query: "" };
  private listeners = new Set<Listener>();

  get snapshot(): FilterState {
    return { ...this.state };
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  update(patch: Partial<FilterState>): void {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((l) => l(this.snapshot));
  }
}
