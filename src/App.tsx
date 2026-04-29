import { useState } from "react";
import type { Book } from "./types/Books";
import { BookList } from "./components/BookList";
import { BookForm } from "./components/BookForm";
import "./App.css";

const initialBooks: Book[] = [
  { id: "b1", title: "L'Étranger", author: "Albert Camus", available: true },
  { id: "b2", title: "1984", author: "George Orwell", available: false },
];

export default function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  function handleAddBook(data: { title: string; author: string }) {
    const newBook: Book = {
      id: Date.now().toString(),
      title: data.title,
      author: data.author,
      available: true,
    };
    setBooks((prev) => [...prev, newBook]);
  }

  return (
    <div className="app">
      <h1>📚 Ma Bibliothèque</h1>

      <BookForm onAdd={handleAddBook} />

      <BookList books={books} />
    </div>
  );
}