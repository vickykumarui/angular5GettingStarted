import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailUserComponent } from './book-detail-user.component';
import { LibraryService } from '../../../app/services/libraryService';

describe('BookDetailUserComponent', () => {
  let fixture: ComponentFixture<BookDetailUserComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BookDetailUserComponent],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .createComponent(BookDetailUserComponent);
    fixture.detectChanges();
  });

});

