import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../app/services/libraryService';

@Component({
  selector: 'app-root',
  providers: [LibraryService],
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
    try {
      this.libraryService.setConfiguration();
      this.libraryService.setBooks();
      this.libraryService.setUsers();
    } catch (err) {
      alert(err);
    }
  }
}
