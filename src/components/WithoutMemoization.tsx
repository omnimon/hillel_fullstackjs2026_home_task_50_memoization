import { useRef, useState } from 'react';
import { items } from '../data/items';
import { expensiveFilter } from '../utils/expensiveFilter';
import { RegularItemList } from './ItemList';
import { StatCard } from './StatCard';

export const WithoutMemoization = () => {
  const [query, setQuery] = useState('');
  const [counter, setCounter] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const renders = useRef(0);
  const calculations = useRef(0);
  renders.current += 1;

  // Runs again on every render, even when only counter changes.
  calculations.current += 1;
  const result = expensiveFilter(items, query);

  // New function reference on every render.
  const handleSelect = (id: number) => setSelectedId(id);

  return (
    <article className="demo-card">
      <span className="badge warning">Without memoization</span>
      <h2>Regular rendering</h2>
      <p className="description">
        Increment the unrelated counter and watch unnecessary work repeat.
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
          hint="Runs on every render"
        />
        <StatCard
          label="Last calculation"
          value={`${result.durationMs.toFixed(2)} ms`}
        />
      </div>

      <RegularItemList
        items={result.items}
        selectedId={selectedId}
        onSelect={handleSelect}
        title="Regular child"
      />
    </article>
  );
};
