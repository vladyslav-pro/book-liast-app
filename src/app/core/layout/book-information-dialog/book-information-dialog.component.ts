import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogRef} from "@angular/material/dialog";
import {BookInformation} from "../../../shared";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {BookService} from "../book-service/book.service";

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
  ],
  templateUrl: './book-information-dialog.component.html',
  styleUrl: './book-information-dialog.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookInformationDialogComponent {
    public data: BookInformation = inject(MAT_DIALOG_DATA);
    dialogRef = inject(MatDialogRef<BookInformationDialogComponent>);
    private bookService = inject(BookService);

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
        validators: [ Validators.required, Validators.minLength(100)]
      }),
    });

    public onSubmit() {
      console.log(this.bookForm.value);
      if (this.bookForm.value) {
        const newBook: BookInformation = {
          title: this.bookForm.value.title!,
          author: this.bookForm.value.author!,
          yearOfPublication: this.bookForm.value.yearOfPublication!,
          genre: this.bookForm.value.genre!,
          imageUrl: this.bookForm.value.imageUrl!,
          description: this.bookForm.value.description!,
          id: Math.random().toString()
        };
        this.bookService.addBook(newBook);
        this.onClose();
      }
    }

    public onClose() {
        this.dialogRef.close();
    }

    get formInvalid() {
      return (
        this.bookForm.invalid &&
        this.bookForm.dirty &&
        this.bookForm.touched
      )
    }

}
