export class Author {
  userId: string;
  name: string;
  dob: Date;
  phone: string;

  constructor(author: Author) {
    Object.assign(author, this);
  }
}
