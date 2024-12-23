import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { RecentBooksComponent } from './recent-books/recent-books.component';


export const routes: Routes = [
  { path: '', component: RecentBooksComponent, pathMatch: 'full' },
  { path: 'book-list', component: BookListComponent },
  { path: 'book/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
