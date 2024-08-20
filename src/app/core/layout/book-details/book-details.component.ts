import { Component, input } from '@angular/core';
import {BookInformation} from "../../../shared";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'book-details',
  standalone: true,
  imports: [
    MatTooltip
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  bookDetails = input.required<BookInformation>();
}
