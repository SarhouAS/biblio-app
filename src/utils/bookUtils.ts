import type { Book, BooksDictionary } from "../types/Books";

export function getAvailableBooks(books: BooksDictionary): Book[] {
  return Object.values(books).filter((book) => book.available);
}