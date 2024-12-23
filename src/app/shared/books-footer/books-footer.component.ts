import { Component } from '@angular/core';

@Component({
  selector: 'app-books-footer',
  templateUrl: './books-footer.component.html',
  styleUrls: ['./books-footer.component.scss']
})
export class BooksFooterComponent {
  footerLinks = [
    { linkName: 'Angular', linkHref: 'https://angular.dev/', label: 'isit Angular official website' },
    { linkName: 'Angular Material', linkHref: 'https://material.angular.io/', label: 'Visit Angular Material official website' },
    { linkName: 'Google Books API', linkHref: 'https://developers.google.com/books', label: 'Visit Google Books API official website' }
  ];
}
