import { Pipe, PipeTransform } from '@angular/core';
import {BookInformation} from "../models/book-information.model";
@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(books: BookInformation[], name: string): BookInformation[] {
    if (name === '') {
      return books;
    }

    return books.filter(book => {
      return book.author.toLowerCase().includes(name.toLowerCase()) || book.title.toLowerCase().includes(name.toLowerCase());
    });

  }

}
