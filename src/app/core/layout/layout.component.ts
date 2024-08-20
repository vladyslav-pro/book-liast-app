import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {BookItemComponent} from "./book-item/book-item.component";
import {BookInformation, booksMock, SearchPipe} from "../../shared";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {BookInformationDialogService} from "./book-information-dialog/book-information-dialog.service";
import {BookService} from "./book-service/book.service";
import {deleteItem} from "./book-item/book-item-animation.component";

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
    SearchPipe,
    MatButton
  ],
  animations:[deleteItem],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  private newBookDialogService = inject(BookInformationDialogService)
  private bookService = inject(BookService)

  public bookName: string = '';
  books = this.bookService.loadBooks;

  public openDialog() {
    this.newBookDialogService.openDialog()
  }
}
