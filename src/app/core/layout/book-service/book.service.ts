import {Injectable, signal} from "@angular/core";
import {BookInformation, booksMock} from "../../../shared";

@Injectable({providedIn: 'root'})
export class BookService {

  private books = signal<BookInformation[]>(booksMock);
  loadBooks = this.books.asReadonly()

  addBook(book: BookInformation) {
    this.books.update(books => [...books, book])
  }
}
