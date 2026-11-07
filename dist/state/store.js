export class FilterStore {
    constructor() {
        this.state = { category: "All", query: "" };
        this.listeners = new Set();
    }
    get snapshot() {
        return { ...this.state };
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }
    update(patch) {
        this.state = { ...this.state, ...patch };
        this.listeners.forEach((l) => l(this.snapshot));
    }
}
