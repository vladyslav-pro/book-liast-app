import {Injectable, signal} from "@angular/core";
import {BookInformation, booksMock} from "../../../shared";

@Injectable({providedIn: 'root'})
export class BookService {

  public books = signal<BookInformation[]>(booksMock);
  loadBooks = this.books.asReadonly()

  addBook(book: BookInformation) {
    this.books.update(books => [book, ...books])
  }

  removeBook(id: string) {
    this.books.update(books => books.filter(book => book.id !== id))
  }

  editBookInformation(book: BookInformation) {
    this.books.update(books => {
      const updatedBooks = books.map(b => b.id === book.id ? book : b);
      return [...updatedBooks];
    })
  }

}
