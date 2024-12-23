import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookPageService } from '../book-service';
import { Book, BookDetail } from '../book-model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent {
  isDescriptionTruncated: boolean = true;

  isLoading: boolean = true;

  book!: BookDetail;

  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bookPageService: BookPageService
  ) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookPageService.getBookById(bookId).subscribe({
        next: (data: Book) => {
          this.book = data.volumeInfo;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Failed to fetch book details:', err);
          this.hasError = true;
          this.isLoading = false;
        }
      });
    }
  }

  toggleDescription(): void {
    this.isDescriptionTruncated = !this.isDescriptionTruncated;
  }

}
