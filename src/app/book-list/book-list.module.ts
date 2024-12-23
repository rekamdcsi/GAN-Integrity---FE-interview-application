import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list.component';
import { BookCardModule } from '../shared/book-card/book-card.module';
import { BooksHeaderModule } from '../shared/books-header/books-header.module';
import { BooksFooterModule } from '../shared/books-footer/books-footer.module';
import { LoaderComponent } from '../shared/loader/loader.component';
import { routes } from '../app-routing.module';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookCardModule,
    BooksHeaderModule,
    BooksFooterModule,
    LoaderComponent,
    NotFoundPageComponent,
    RouterModule.forChild(routes),

  ],
  exports: [BookListComponent]
})
export class BookListModule { }
