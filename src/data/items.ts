export type DemoItem = {
  id: number;
  name: string;
  category: string;
};

const categories = ['Frontend', 'Backend', 'Testing', 'DevOps', 'Design'];

export const items: DemoItem[] = Array.from({ length: 4500 }, (_, index) => ({
  id: index + 1,
  name: `Item ${String(index + 1).padStart(4, '0')}`,
  category: categories[index % categories.length],
}));
