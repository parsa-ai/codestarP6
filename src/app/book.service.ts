import { Injectable } from '@angular/core';
import { Book } from './books/books-interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      name: "The Midnight Library",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Fantasy"],
      author: "Matt Haig",
      publishDate: "2020-08-13",
      price: 1499
    },
    {
      name: "Dune",
      image: "https://picsum.photos/200/300",
      genre: ["Science Fiction", "Adventure"],
      author: "Frank Herbert",
      publishDate: "1965-08-01",
      price: 999
    },
    {
      name: "To Kill a Mockingbird",
      image: "https://picsum.photos/200/300",
      genre: ["Fiction", "Classic"],
      author: "Harper Lee",
      publishDate: "1960-07-11",
      price: 799
    },
    {
      name: "1984",
      image: "https://picsum.photos/200/300",
      genre: ["Dystopian", "Science Fiction"],
      author: "George Orwell",
      publishDate: "1949-06-08",
      price: 899
    }
  ];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
