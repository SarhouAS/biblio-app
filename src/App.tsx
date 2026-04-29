import { useState } from "react";
import type { Book, BooksDictionary } from "./types/Books";
import { generateId } from "./utils/bookUtils";
import { BookList } from "./components/BookList";
import { BookForm } from "./components/BookForm";
import "./App.css";

const initialBooks: BooksDictionary = {
  b1: { id: "b1", title: "L'Étranger", author: "Albert Camus", available: true },
  b2: { id: "b2", title: "1984", author: "George Orwell", available: false },
};

export default function App() {

  const [books, setBooks] = useState<BooksDictionary>(initialBooks);

  function handleAddBook(data: { title: string; author: string }) {
    const id = generateId();
    const newBook: Book = {
      id,
      title: data.title,
      author: data.author,
      available: true,
    };
    setBooks((prev) => ({ ...prev, [id]: newBook }));
  }

  const bookArray = Object.values(books);

  return (
    <div className="app">
      <h1>📚 Ma Bibliothèque</h1>

      <BookForm onAdd={handleAddBook} />

      <BookList books={bookArray} />
    </div>
  );
}