import { Author } from './author';

export interface Book {
    id: number;
    name: string;
    pages: number;
    author: Author;
}