import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInformationDialogComponent } from './book-information-dialog.component';

describe('NewBookComponent', () => {
  let component: BookInformationDialogComponent;
  let fixture: ComponentFixture<BookInformationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookInformationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
