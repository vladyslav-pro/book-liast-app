import { Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from "@angular/material/dialog";
import {BookInformation} from "../../../shared";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {BookService} from "../book-service/book.service";
import {BookDetailsComponent} from "../book-details/book-details.component";

@Component({
  selector: 'app-book-information-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatDialogActions,
    MatButton,
    BookDetailsComponent,
  ],
  templateUrl: './book-information-dialog.component.html',
  styleUrl: './book-information-dialog.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BookInformationDialogComponent implements OnInit{
    public data: BookInformation = inject(MAT_DIALOG_DATA);
    dialogRef = inject(MatDialogRef<BookInformationDialogComponent>);
    private bookService = inject(BookService);

    public newBook: boolean = false;
    public editBook: boolean = false;

    public bookForm = new FormGroup({
      title: new FormControl('', {
        validators: [ Validators.required, Validators.minLength(3)]
      }),
      author: new FormControl('', {
        validators: [ Validators.required, Validators.minLength(3)]
      }),
      yearOfPublication: new FormControl('', {
        validators: [ Validators.required, Validators.minLength(4)]
      }),
      genre: new FormControl('', {
        validators: [ Validators.required, Validators.minLength(3)]
      }),
      imageUrl: new FormControl('', {
        validators: [ Validators.required]
      }),
      description: new FormControl('', {
        validators: [ Validators.required, Validators.minLength(30)]
      }),
    });

    ngOnInit() {
      if (!this.data) {
        this.newBook = true;
      }
    }

    public onSubmit() {
        if (this.bookForm.value) {
          const book: BookInformation = {
            title: this.bookForm.value.title!,
            author: this.bookForm.value.author!,
            yearOfPublication: this.bookForm.value.yearOfPublication!,
            genre: this.bookForm.value.genre!,
            imageUrl: this.bookForm.value.imageUrl!,
            description: this.bookForm.value.description!,
            id: this.data?.id ?? Math.random().toString()
          };
            this.newBook ?
            this.bookService.addBook(book)
            : this.saveChanges(book);
            this.onClose();
        }
      }

      public onClose() {
          this.dialogRef.close();
      }


  editBookInformation() {
      this.editBook = true;
      this.bookForm.patchValue(this.data)
  }

  saveChanges(book: BookInformation) {
    this.bookService.editBookInformation(book)
  }

  deleteBook() {
    this.bookService.removeBook(this.data!.id);
    this.onClose();
  }

}
