import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListModule } from './book-list/book-list.module';
import { BookCardModule } from './shared/book-card/book-card.module';
import { BookDetailModule } from './book-detail/book-detail.module';
import { RecentBooksModule } from './recent-books/recent-books.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    RecentBooksModule,
    BookListModule,
    BookCardModule,
    BookDetailModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
