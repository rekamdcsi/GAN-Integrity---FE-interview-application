import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book-model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book;

  @Input() id!: string;

  @Input() showBookDetails: boolean = false;

  bookDetails: Book['volumeInfo'] | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.bookDetails = this.book?.volumeInfo ?? {};
  }
}
