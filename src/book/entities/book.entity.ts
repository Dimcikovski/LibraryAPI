import { Author } from './author.entity';

export class Book {
  bookId: string;
  name: string;
  author: Author;
  available: boolean;
  createdDate: string;
  updatedDate: string;

  constructor(book: Book) {
    Object.assign(book, this);
  }
}
