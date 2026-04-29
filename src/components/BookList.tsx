import type { Book } from "../types/Books";
import { BookItem } from "./BookItem";

interface BookListProps {
  books: Book[];
}

export function BookList({ books }: BookListProps) {
  if (books.length === 0) {
    return <p>Aucun livre à afficher.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book.id}>
          <BookItem book={book} />
        </li>
      ))}
    </ul>
  );
}