import {inject, Injectable} from "@angular/core";
import {BookInformationDialogComponent} from "./book-information-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {BookInformation} from "../../../shared";

@Injectable({providedIn: 'root'})
export class BookInformationDialogService {
  private dialog = inject(MatDialog)
  public openDialog( data?: BookInformation) {
    const dialogRef = this.dialog.open(BookInformationDialogComponent, {
      width: '600px',
      height: '900px',
      data: data || null
    });
    return dialogRef.afterClosed()
  }
}
