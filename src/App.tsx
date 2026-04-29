import { useState } from "react";
import type { Book, BooksDictionary } from "./types/Books";
import { generateId, filterBooksByTitle } from "./utils/bookUtils";
import { BookList } from "./components/BookList";
import { BookForm } from "./components/BookForm";
import "./App.css";

const initialBooks: BooksDictionary = {
  b1: { id: "b1", title: "L'Étranger", author: "Albert Camus", available: true },
  b2: { id: "b2", title: "1984", author: "George Orwell", available: false },
};

export default function App() {
  const [books, setBooks] = useState<BooksDictionary>(initialBooks);

  const [search, setSearch] = useState<string>("");

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

  const filteredBooks = filterBooksByTitle(books, search);

  return (
    <div className="app">
      <h1>📚 Ma Bibliothèque</h1>

      <BookForm onAdd={handleAddBook} />

      <input
        type="text"
        placeholder="Filtrer par titre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BookList books={filteredBooks} />
    </div>
  );
}