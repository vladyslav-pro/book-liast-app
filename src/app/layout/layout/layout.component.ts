import {Component, ViewEncapsulation} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {BookItemComponent} from "./book-item/book-item.component";
import {BookInformation, booksMock, SearchPipe} from "../../shared";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    MatFormField,
    FormsModule,
    MatIcon,
    BookItemComponent,
    MatLabel,
    MatInput,
    MatIconButton,
    MatSuffix,
    SearchPipe
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent {
  bookName: string = '';
  public books: BookInformation[] = booksMock;
}
