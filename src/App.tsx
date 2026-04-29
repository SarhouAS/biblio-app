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

  const [selectedId, setSelectedId] = useState<string | null>(null);

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

  function handleSelect(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  const filteredBooks = filterBooksByTitle(books, search);

  const selectedBook: Book | null = selectedId
    ? books[selectedId] ?? null
    : null;

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

      {selectedBook && (
        <div className="details">
          <h2>Détails</h2>
          <p><strong>Titre :</strong> {selectedBook.title}</p>
          <p><strong>Auteur :</strong> {selectedBook.author}</p>
          <p><strong>Disponible :</strong> {selectedBook.available ? "oui" : "non"}</p>
          <button onClick={() => setSelectedId(null)}>Fermer</button>
        </div>
      )}

      <BookList books={filteredBooks} onSelect={handleSelect} />
    </div>
  );
}