import { NgModule } from '@angular/core';
import { BookCardModule } from '../shared/book-card/book-card.module';
import { CommonModule } from '@angular/common';
import { RecentBooksComponent } from './recent-books.component';
import { BooksFooterModule } from '../shared/books-footer/books-footer.module';
import { BooksHeaderModule } from '../shared/books-header/books-header.module';
import { LoaderComponent } from '../shared/loader/loader.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';
import { MatButton, MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RecentBooksComponent
  ],
  imports: [
    CommonModule,
    BookCardModule,
    BooksHeaderModule,
    BooksFooterModule,
    LoaderComponent,
    NotFoundPageComponent,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [RecentBooksComponent]
})
export class RecentBooksModule { }
