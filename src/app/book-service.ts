import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, BooksResponse } from './book-model';

@Injectable({
  providedIn: 'root'
})
export class BookPageService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  getBooks(query: string, results: number): Observable<BooksResponse> {
    return this.http.get<BooksResponse>(`${this.apiUrl}?q=${query}&maxResults=${results}`);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}
