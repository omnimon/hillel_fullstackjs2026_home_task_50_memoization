import { useCallback, useMemo, useRef, useState } from 'react';
import { items } from '../data/items';
import { expensiveFilter } from '../utils/expensiveFilter';
import { MemoizedItemList } from './ItemList';
import { StatCard } from './StatCard';

export const WithMemoization = () => {
  const [query, setQuery] = useState('');
  const [counter, setCounter] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const renders = useRef(0);
  const calculations = useRef(0);
  renders.current += 1;

  // useMemo recalculates only when the real dependency changes.
  const result = useMemo(() => {
    calculations.current += 1;
    return expensiveFilter(items, query);
  }, [query]);

  // useCallback preserves the callback reference.
  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  return (
    <article className="demo-card optimized">
      <span className="badge success">With memoization</span>
      <h2>Optimized rendering</h2>
      <p className="description">
        Parent re-renders, but unnecessary calculations and child renders are skipped.
      </p>

      <label>
        Filter items
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try: testing"
        />
      </label>

      <div className="counter-row">
        <strong>Unrelated counter: {counter}</strong>
        <button type="button" onClick={() => setCounter((value) => value + 1)}>
          Increment counter
        </button>
      </div>

      <div className="stats">
        <StatCard label="Parent renders" value={renders.current} />
        <StatCard
          label="Expensive calculations"
          value={calculations.current}
          hint="Changes only with query"
        />
        <StatCard
          label="Last calculation"
          value={`${result.durationMs.toFixed(2)} ms`}
        />
      </div>

      <MemoizedItemList
        items={result.items}
        selectedId={selectedId}
        onSelect={handleSelect}
        title="Memoized child"
      />
    </article>
  );
};
