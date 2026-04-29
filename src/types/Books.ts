export interface Book {
  id: string;
  title: string;
  author: string;
}

export type BooksDictionary = Record<string, Book>;