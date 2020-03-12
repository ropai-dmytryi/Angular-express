import { OnInit, Component } from '@angular/core';
import { BOOKS } from '../mock-books';
import { Book } from '../entities/book';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books = BOOKS;
    selectedBook: Book;

    constructor() {}

    ngOnInit() {
    }

    onSelect(book: Book): void {
        this.selectedBook = book;
    }

}