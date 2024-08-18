import {Component, input} from '@angular/core';
import {BookInformation} from "../../../shared";

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
   book = input.required<BookInformation>();

}
