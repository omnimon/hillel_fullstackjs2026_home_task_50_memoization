import type { DemoItem } from '../data/items';

export type FilterResult = {
  items: DemoItem[];
  durationMs: number;
};

export const expensiveFilter = (
  source: DemoItem[],
  query: string,
): FilterResult => {
  const startedAt = performance.now();
  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = source.filter((item) => {
    // Intentional CPU work for a visible memoization demo.
    let checksum = 0;
    for (let i = 0; i < 90; i += 1) {
      checksum = (checksum + item.id * (i + 3)) % 104729;
    }

    const matches =
      !normalizedQuery ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery);

    return matches && checksum >= 0;
  });

  return {
    items: filteredItems,
    durationMs: performance.now() - startedAt,
  };
};
