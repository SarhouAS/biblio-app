import type { Book, BooksDictionary } from "../types/Books";

export function getAvailableBooks(books: BooksDictionary): Book[] {
  return Object.values(books).filter((book) => book.available);
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function filterBooksByTitle(
  books: BooksDictionary,
  query: string
): Book[] {
  const trimmed = query.trim().toLowerCase();

  if (trimmed === "") {
    return Object.values(books);
  }

  return Object.values(books).filter((book) =>
    book.title.toLowerCase().includes(trimmed)
  );
}