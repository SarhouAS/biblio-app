import { useState } from "react";
import type { Book } from "./types/Books";
import { BookList } from "./components/BookList";
import "./App.css";

const initialBooks: Book[] = [
  { id: "b1", title: "L'Étranger", author: "Albert Camus", available: true },
  { id: "b2", title: "1984", author: "George Orwell", available: false },
];

export default function App() {

  const [books, setBooks] = useState<Book[]>(initialBooks);

  function handleAddBook() {
    const newBook: Book = {
      id: Date.now().toString(),
      title: "Nouveau livre",
      author: "Auteur inconnu",
      available: true,
    };
    setBooks((prev) => [...prev, newBook]);
  }

  return (
    <div className="app">
      <h1>📚 Ma Bibliothèque</h1>

      <button onClick={handleAddBook}>Ajouter un livre</button>

      <BookList books={books} />
    </div>
  );
}