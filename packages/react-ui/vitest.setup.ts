import "@testing-library/jest-dom/vitest";

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// cmdk and other headless primitives rely on ResizeObserver in jsdom tests.
globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;

if (!HTMLElement.prototype.scrollIntoView) {
  HTMLElement.prototype.scrollIntoView = () => {};
}
