import { Component, Input, OnInit } from '@angular/core';
import { LibraryService } from '../../../app/services/libraryService';

@Component({
  selector: 'app-admin-track-books',
  providers: [LibraryService],
  templateUrl: './admin-track-books.component.html',
  styleUrls: ['./admin-track-books.component.scss']
})
export class AdminTrackBooksComponent implements OnInit {

  @Input() bookData;

  constructor(
    private libraryService: LibraryService
  ) { }

  booksIssued: any;
  booksIssuedToUser: any;
  currentTrack: string;

  ngOnInit() {
    this.currentTrack = 'by-book';

    this.libraryService.getBooks().then(data => {
      this.booksIssued = data;
    }).catch(err => {
      alert(err);
    });

    this.libraryService.getUsers().then(data => {
      console.log(data);
      this.booksIssuedToUser = data;
      this.booksIssuedToUser = this.booksIssuedToUser.filter((datum) => {
        if (datum.issuedBooks.length > 0) {
          console.log(datum);
          return datum;
        }
      });
      console.log('vicky book', this.booksIssuedToUser);
    }).catch(err => {
      alert(err);
    });
  }

  setCurrentTrack(track: string) {
    this.currentTrack = track;
  }

}
