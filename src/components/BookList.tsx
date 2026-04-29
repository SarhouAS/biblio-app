import type { Book } from "../types/Book";
import { BookItem } from "./BookItem";

interface BookListProps {
  books: Book[];
  onSelect?: (id: string) => void;
  onToggle?: (id: string) => void;
}

export function BookList({ books, onSelect, onToggle }: BookListProps) {
  if (books.length === 0) {
    return <p>Aucun livre à afficher.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <BookItem book={book} onSelect={onSelect} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
}