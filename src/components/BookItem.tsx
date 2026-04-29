import type { Book } from "../types/Books";

interface BookItemProps {
  book: Book;
}

export function BookItem({ book }: BookItemProps) {
  return (
    <article className="book-item">
      <h3>{book.title}</h3>
      <p>par {book.author}</p>
      <p>{book.available ? "✅ Disponible" : "❌ Indisponible"}</p>
    </article>
  );
}