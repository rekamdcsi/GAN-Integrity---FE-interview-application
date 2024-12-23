import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { routes } from '../app-routing.module';
import { BooksFooterModule } from '../shared/books-footer/books-footer.module';
import { BooksHeaderModule } from '../shared/books-header/books-header.module';
import { LoaderComponent } from '../shared/loader/loader.component';
import { NotFoundPageComponent } from '../shared/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    BooksHeaderModule,
    BooksFooterModule,
    LoaderComponent,
    NotFoundPageComponent,
  ],
  exports: [BookDetailComponent]

})
export class BookDetailModule {}
