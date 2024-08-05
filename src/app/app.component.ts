import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { formsComponent } from './forms/forms.component';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, formsComponent, BooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prj2';
  EditB = true;
  public editEventFunc(event : Event){
    console.log(event)
  }

}
