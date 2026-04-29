export type BookStatus = "disponible" | "emprunté";

export interface Book {
  id: string;
  title: string;
  author: string;
  available: boolean;

  status: BookStatus;
}

export type BooksDictionary = Record<string, Book>;