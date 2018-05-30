import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../../../app/services/libraryService';

@Component({
  selector: 'app-book-log',
  providers: [LibraryService],
  templateUrl: './book-log.component.html',
  styleUrls: ['./book-log.component.scss']
})
export class BookLogComponent implements OnInit {
  @Input() issuedBook;
  @Input() bookData;
  @Input() getBookPlace;
  @Input() logs;

  constructor(
    private libraryService: LibraryService
  ) { }

  modalId: any;
  targetModalId: any;
  ratingArray = [1, 2, 3, 4, 5];

  todaysDate = new Date();

  ngOnInit() { }

  returnBook(book, bookIndex) {
    this.issuedBook[bookIndex].toDate = this.todaysDate;
    this.libraryService.returnTheBook(book.id, this.issuedBook[bookIndex]).then((res) => {
      const issuedBooksInd = this.issuedBook.map(data => {
        return data.id;
      }).indexOf(book.id);
      this.issuedBook.splice(issuedBooksInd, 1);
      this.logs.push(book);
      book.toDate = this.todaysDate;
    }).catch((err) => {
      alert(err);
    });
  }

  ratingToBook(rating, bookIndex) {
    this.issuedBook[bookIndex].rating = rating;
  }

}
