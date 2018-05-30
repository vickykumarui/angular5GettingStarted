import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-book-detail-user',
  templateUrl: './book-detail-user.component.html',
  styleUrls: ['./book-detail-user.component.scss']
})
export class BookDetailUserComponent implements OnInit {
  @Input() bookData;
  @Input() issuedBook;
  @Input() getBookPlace;
  public bookDataToDIsplay;
  public noOfPage;
  public pageLength = 10;
  public currentPage;
  public filteredBookData;
  public showSearchFilter = false;
  public searchVal = '';


  filterValueArray = ['Show All', 'Sports', 'Fiction', 'Technology'];
  filterValue: any;
  constructor() { }

  ngOnInit() {
    this.filterValue = 'Show All';
    this.filteredBookData = this.bookData;
    this.initializePagination();
  }

  initializePagination() {
    this.currentPage = 1;
    this.noOfPage = Math.ceil(this.filteredBookData.length / this.pageLength);
    this.bookDataToDIsplay = this.filteredBookData.slice((this.currentPage - 1) * 10, ((this.currentPage - 1) * 10 + this.pageLength));
  }
  nextPage() {
    this.currentPage++;
    this.bookDataToDIsplay = this.filteredBookData.slice((this.currentPage - 1) * 10, ((this.currentPage - 1) * 10 + this.pageLength));

  }

  previousPage() {
    this.currentPage--;
    this.bookDataToDIsplay = this.filteredBookData.slice((this.currentPage - 1) * 10, ((this.currentPage - 1) * 10 + this.pageLength));

  }

  filterBook(type) {
    this.searchVal = '';
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

  searchBook(name) {
    this.filterValue = 'Show All';
    if (name) {
      const localBookList = [];
      this.bookData.forEach(function (value) {
        if (value.author === name || value.title === name) {
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
