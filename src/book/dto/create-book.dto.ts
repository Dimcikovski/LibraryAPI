import { Author } from '../entities/author.entity';

export class CreateBookDto {
  bookId: string;
  name: string;
  author: Author;

  constructor(book: CreateBookDto) {
    Object.assign(book, this);
  }
}
