import type { Book } from "../types/Book";

interface BookItemProps {
  book: Book;
  onSelect?: (id: string) => void;
  onToggle?: (id: string) => void;
}

export function BookItem({ book, onSelect, onToggle }: BookItemProps) {
  return (
    <article className="book-item" onClick={() => onSelect?.(book.id)}>
      <h3>{book.title}</h3>
      <p>par {book.author}</p>
      <p>Statut : <strong>{book.status}</strong></p>

      {onToggle && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle(book.id);
          }}
        >
          {book.status === "disponible" ? "Emprunter" : "Rendre"}
        </button>
      )}
    </article>
  );
}