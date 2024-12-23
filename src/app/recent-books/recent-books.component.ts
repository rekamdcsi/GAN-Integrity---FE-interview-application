import { Component } from '@angular/core';
import { Book, BooksResponse } from '../book-model';
import { BookPageService } from '../book-service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent {
  books: Book[] = [];

  isLoading: boolean = true;

  filteredBooks: Book[] = [];

  searchQuery: string = '';

  constructor(private bookService: BookPageService) {}

  get isBookListEmpty() {
    return this.filteredBooks.length === 0;
  }

  ngOnInit() {
    let params = new URLSearchParams(document.location.search);
    this.searchQuery = params.get("search") ?? '';

    this.bookService.getBooks('javascript', 3).subscribe((data: BooksResponse) => {
      this.books = data.items || [];
      this.filteredBooks = [...this.books];
      this.isLoading = false;

      if (this.searchQuery) {
        this.filterBooks(this.searchQuery);
      }
    });

  }

  filterBooks(query: string) {
    this.filteredBooks = this.books.filter((book) => {
      const titleMatch = book.volumeInfo.title.toLowerCase().includes(query);
      const authorsMatch = book.volumeInfo.authors?.some((author) =>
        author.toLowerCase().includes(query)
      );
        return titleMatch || authorsMatch;
    });
  }

  onSearch() {
    const query = this.searchQuery.trim().toLowerCase();

    this.updateSearchParam(query);
    this.filterBooks(query)
  }

  updateSearchParam(query: string) {
    if (query !== '') {
      const url = new URL(document.location.href);
      url.searchParams.set('search', query);
      window.history.pushState({}, '', url.toString());
    } else {
      window.history.pushState({}, '', document.location.pathname);
    }
  }
}
