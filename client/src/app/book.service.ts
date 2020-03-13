import { Injectable } from '@angular/core';
import { Book } from './entities/book';
import { BOOKS } from './mock-books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
}
