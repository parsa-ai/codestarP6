import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './books-interface';
import { NgFor, NgIf } from '@angular/common';
import { EditBookComponent } from '../edit/edit.component';

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  imports: [NgFor , EditBookComponent , NgIf]
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null | any = null;

  btnS = ["bg-gray-50", "p-2", "rounded-lg", "text-gray-800", "w-full", ""];
  private bookService = inject(BookService);

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  public sortAscending(typeO: string) {
    if (typeO === "name") {
      this.books = this.books.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (typeO === "author") {
      this.books = this.books.sort((a, b) => a.author.localeCompare(b.author));
    }
    else if (typeO === "price") {
      this.books = this.books.sort((a, b) => b.price - a.price);
    }
  }

  public sortDescending(typeO: string) {
    if (typeO === "name") {
      this.books = this.books.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (typeO === "author") {
      this.books = this.books.sort((a, b) => b.author.localeCompare(a.author));
    }
    else if (typeO === "price") {
      this.books = this.books.sort((a, b) => a.price - b.price);
    }
  }

  public editBook(book: Book) {
    this.selectedBook = { ...book };
  }

  public closePopup() {
    this.selectedBook = null;
  }

  public updateBook(updatedBook: Book) {
    const index = this.books.findIndex(book => book.name === updatedBook.name);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }
}
