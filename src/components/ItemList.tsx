import { memo, useRef } from 'react';
import type { DemoItem } from '../data/items';

type Props = {
  items: DemoItem[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  title: string;
};

const ListBody = ({ items, selectedId, onSelect, title }: Props) => {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <section className="list-panel">
      <div className="list-heading">
        <div>
          <h3>{title}</h3>
          <p>Child renders: <strong>{renders.current}</strong></p>
        </div>
        <span>{items.length} results</span>
      </div>

      <div className="item-list">
        {items.slice(0, 8).map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === selectedId ? 'item selected' : 'item'}
            onClick={() => onSelect(item.id)}
          >
            <span>{item.name}</span>
            <small>{item.category}</small>
          </button>
        ))}
      </div>
    </section>
  );
};

export const RegularItemList = (props: Props) => <ListBody {...props} />;

// React.memo skips the render when the child props are unchanged.
export const MemoizedItemList = memo(ListBody);
