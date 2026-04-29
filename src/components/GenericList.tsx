import type { ReactNode } from "react";

interface GenericListProps<T> {
  items: T[];
  getKey: (item: T) => string | number;
  renderItem: (item: T) => ReactNode;
  emptyText?: string;
}

export function GenericList<T>({
  items,
  getKey,
  renderItem,
  emptyText = "Liste vide.",
}: GenericListProps<T>) {
  if (items.length === 0) {
    return <p>{emptyText}</p>;
  }

  return (
    <ul className="generic-list">
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}