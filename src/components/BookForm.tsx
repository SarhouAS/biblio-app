import { useState } from "react";
import type { FormEvent } from "react";

interface BookFormProps {
  onAdd: (data: { title: string; author: string }) => void;
}

export function BookForm({ onAdd }: BookFormProps) {

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const cleanTitle = title.trim();
    const cleanAuthor = author.trim();

    if (cleanTitle === "" || cleanAuthor === "") return;

    onAdd({ title: cleanTitle, author: cleanAuthor });

    setTitle("");
    setAuthor("");
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Ajouter un livre</h2>

      <label>
        Titre
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Auteur
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>

      <button type="submit">Ajouter</button>
    </form>
  );
}