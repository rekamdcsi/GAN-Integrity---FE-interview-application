import { Component, OnInit } from '@angular/core';
import { BookPageService } from '../book-service';
import { Book, BooksResponse } from '../book-model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  isLoading: boolean = true;

  constructor(private bookService: BookPageService) {}

  get isBookListEmpty() {
    return this.books.length === 0;
  }

  ngOnInit() {
    this.bookService.getBooks('get hired', 10).subscribe((data: BooksResponse) => {
      this.books = data.items || [];
      this.isLoading = false;
    });
  }

}
