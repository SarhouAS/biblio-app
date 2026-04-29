import type { Book } from "../types/Books";

interface BookItemProps {
  book: Book;
  onSelect?: (id: string) => void;
}

export function BookItem({ book, onSelect }: BookItemProps) {
  return (
    <article className="book-item" onClick={() => onSelect?.(book.id)}>
      <h3>{book.title}</h3>
      <p>par {book.author}</p>
      <p>{book.available ? "✅ Disponible" : "❌ Indisponible"}</p>
    </article>
  );
}