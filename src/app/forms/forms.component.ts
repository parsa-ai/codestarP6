import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../books/books-interface';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./forms.component.css']
})
export class formsComponent {
  book: Omit<Book, 'genre'> & { genre: string } = {
    name: '',
    image: '',
    genre: '',
    author: '',
    publishDate: '',
    price: 0
  };

  constructor(private bookService: BookService) {}

  onSubmit() {
    const newBook: Book = { ...this.book, genre: this.book.genre.split(',').map(g => g.trim()) };
    this.bookService.addBook(newBook);
    this.book = {
      name: '',
      image: '',
      genre: '',
      author: '',
      publishDate: '',
      price: 0
    };
  }
}
