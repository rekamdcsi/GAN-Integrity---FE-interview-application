export interface Book {
  id: string;
  volumeInfo: BookDetail
}

export interface BookDetail {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {thumbnail: string};
}

export interface BooksResponse {
  items: Book[];
}
