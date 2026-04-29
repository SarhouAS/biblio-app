import { useState } from "react";
import type { Book, BooksDictionary } from "./types/Book";
import {
  generateId,
  filterBooksByTitle,
  toggleBookStatus,
} from "./utils/bookUtils";
import { BookList } from "./components/BookList";
import { BookForm } from "./components/BookForm";
import "./App.css";

const initialBooks: BooksDictionary = {
  b1: {
    id: "b1",
    title: "L'Étranger",
    author: "Albert Camus",
    available: true,
    status: "disponible",
  },
  b2: {
    id: "b2",
    title: "1984",
    author: "George Orwell",
    available: false,
    status: "emprunté",
  },
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
      status: "disponible",
    };
    setBooks((prev) => ({ ...prev, [id]: newBook }));
  }

  function handleSelect(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function handleToggle(id: string) {
    setBooks((prev) => toggleBookStatus(prev, id));
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
          <p><strong>Statut :</strong> {selectedBook.status}</p>
          <button onClick={() => setSelectedId(null)}>Fermer</button>
        </div>
      )}

      <BookList
        books={filteredBooks}
        onSelect={handleSelect}
        onToggle={handleToggle}
      />
    </div>
  );
}