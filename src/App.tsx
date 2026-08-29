import { WithoutMemoization } from './components/WithoutMemoization';
import { WithMemoization } from './components/WithMemoization';

function App() {
  return (
    <div className="app-shell">
      <header>
        <span className="eyebrow">Hillel FullStack JS · React</span>
        <h1>Memoization Performance Demo</h1>
        <p>
          Compare the same UI before and after <code>useMemo</code>,{' '}
          <code>useCallback</code> and <code>React.memo</code>.
        </p>
      </header>

      <div className="instructions">
        <strong>Try this:</strong>
        <span>
          Click <em>Increment counter</em> several times in both panels.
          The optimized panel should keep its calculation and child-render
          counters unchanged.
        </span>
      </div>

      <main className="comparison-grid">
        <WithoutMemoization />
        <WithMemoization />
      </main>
    </div>
  );
}

export default App;
