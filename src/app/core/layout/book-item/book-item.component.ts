import {Component, input} from '@angular/core';
import {BookInformation} from "../../../shared";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [
    MatTooltip,
  ],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
   book = input.required<BookInformation>();

}
