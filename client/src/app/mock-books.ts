import { Book } from './entities/book';
import { Author } from './entities/author';
import { AUTHORS } from './mock-authors';

export const BOOKS: Book[] = [
    { id: 1, name: 'Java programming', pages: 1012, author: AUTHORS.find((author: Author) => author.id === 1)},
    { id: 2, name: 'How to be a photograhper', pages: 578, author: AUTHORS.find((author: Author) => author.id === 2)},
    { id: 3, name: 'Bork-bork', pages: 16, author: AUTHORS.find((author: Author) => author.id === 3)},
]