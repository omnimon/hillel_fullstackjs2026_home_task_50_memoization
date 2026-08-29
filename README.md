# React Memoization Performance Demo

Homework project for the Hillel FullStack JavaScript course.

## Goal

Demonstrate React memoization with:

- `useMemo`
- `useCallback`
- `React.memo`

## Demo idea

The application contains two equivalent panels:

### Without memoization

- the expensive filter runs on every parent render;
- a new callback reference is created on every render;
- the child component renders together with its parent.

### With memoization

- `useMemo` caches the filtering result until `query` changes;
- `useCallback` preserves the callback reference;
- `React.memo` can skip the child render when its props stay unchanged.

The UI displays parent-render, calculation and child-render counters.

## How to demonstrate the effect

1. Run the app.
2. Click **Increment counter** several times in the left panel.
3. Notice that calculations and child renders increase.
4. Repeat in the optimized right panel.
5. Parent renders increase, but expensive calculations and child renders remain unchanged.
6. Change the search query. Because this is a real dependency, the optimized calculation runs again.

## Important note

Memoization has its own cost, so it should be used to avoid meaningful work rather than added to every component automatically.

`React.StrictMode` is intentionally omitted from this educational demo because its extra development renders would make the visible counters less intuitive.

## Installation

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Demo

Live demo: `<vercel-url>`

## Repository

Repository: `<repository-url>`
