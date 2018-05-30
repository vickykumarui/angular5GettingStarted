import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LibraryService } from '../../../app/services/libraryService';

@Component({
  selector: 'app-admin-management',
  providers: [LibraryService],
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent implements OnInit {
  @Input() bookData;

  constructor(
    private libraryService: LibraryService
  ) { }

  books: any;
  filterValueArray = ['Show All', 'Sports', 'Fiction', 'Technology'];
  filterValue: any;
  textFieldMode = [];
  public bookDataToDIsplay;
  public noOfPage;
  public pageLength = 10;
  public currentPage;
  public filteredBookData;
  public showSearchFilter;

  ngOnInit() {
    this.filterValue = 'Show All';
    this.filteredBookData = this.bookData;
    this.initializePagination();
  }

  nextPage() {
    this.currentPage++;
    this.bookDataToDIsplay = this.filteredBookData.slice((this.currentPage - 1) * 10, ((this.currentPage - 1) * 10 + this.pageLength));

  }

  previousPage() {
    this.currentPage--;
    this.bookDataToDIsplay = this.filteredBookData.slice((this.currentPage - 1) * 10, ((this.currentPage - 1) * 10 + this.pageLength));

  }

  initializePagination() {
    this.currentPage = 1;
    this.noOfPage = Math.ceil(this.filteredBookData.length / this.pageLength);
    this.bookDataToDIsplay = this.filteredBookData.slice((this.currentPage - 1) * 10, ((this.currentPage - 1) * 10 + this.pageLength));
  }

  UpdateInfo(book) {
    const bookData = {
      'title': book.title,
      'isbn': book.isbn,
      'author': book.author,
      'genre': book.genre,
      'totalPresent': book.totalPresent
    };
    this.libraryService.updateBooks(book.id, bookData).then(data => {
      alert('book Updated successfully ');
    }).catch(err => {
      alert(err);
    });
  }


  filterBook(type) {
    if (type !== 'Show All') {
      const localBookList = [];
      this.bookData.forEach(function (value) {
        if (value.genre === type) {
          localBookList.push(value);
        }
      });
      this.filteredBookData = localBookList;
    } else {
      this.filteredBookData = this.bookData;
    }
    this.initializePagination();

  }


}
