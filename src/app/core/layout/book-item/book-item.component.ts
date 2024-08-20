import {Component, inject, input} from '@angular/core';
import {BookInformation} from "../../../shared";
import {MatTooltip} from "@angular/material/tooltip";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {BookService} from "../book-service/book.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BookInformationDialogService} from "../book-information-dialog/book-information-dialog.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltip,
    MatMenuTrigger,
    MatIconButton,
    MatIcon,
    MatMenuItem,
    MatMenu,
    ReactiveFormsModule,
  ],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
   private bookService = inject(BookService);
   private bookInformationDialogService = inject(BookInformationDialogService)

   book = input.required<BookInformation>();
   public editMode = false;

  editBookInformation = new FormGroup({
    author: new FormControl('', {
      validators: [ Validators.required, Validators.minLength(3)]
    }),
    bookName: new FormControl('', {
      validators: [ Validators.required, Validators.minLength(3)]
    }),
    yearOfPublication: new FormControl('', {
      validators: [ Validators.required, Validators.minLength(4)]
    }),
  })

  editBook(book: BookInformation) {
      this.editMode = true;
      this.editBookInformation.patchValue({
        author: book.author,
        bookName: book.title,
        yearOfPublication: book.yearOfPublication
      })
   }

   deleteBook(bookID: string) {
     this.bookService.removeBook(bookID);
   }

  onSubmit() {
    const editedBook: BookInformation = {
      ...this.book(),
      author: this.editBookInformation.value.author!,
      title: this.editBookInformation.value.bookName!,
      yearOfPublication: this.editBookInformation.value.yearOfPublication!
    }
    this.canselEdit();
    this.bookService.editBookInformation(editedBook)
  }

  showMoreInformation(book: BookInformation) {
    this.bookInformationDialogService.openDialog(book);
  }

   canselEdit() {
      this.editMode = false;
   }

}
