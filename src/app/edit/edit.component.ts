import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books/books-interface';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditBookComponent {
  @Input() book!: Book;
  @Output() closePopup = new EventEmitter<void>();
  @Output() saveBook = new EventEmitter<Book>();

  close() {
    this.closePopup.emit();
  }

  onSubmit() {
    this.saveBook.emit(this.book);
    this.close();
  }
}
