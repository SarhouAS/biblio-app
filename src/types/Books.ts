export interface Book {
  id: string;
  title: string;
  author: string;
  available: boolean;
}

export type BooksDictionary = Record<string, Book>;