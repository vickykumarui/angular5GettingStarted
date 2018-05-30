import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LibraryService } from '../../../app/services/libraryService';

@Component({
  selector: 'app-admin-menu',
  providers: [LibraryService],
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {
  currentPanel;
  constructor(
    private router: Router,
    private http: HttpClient,
    private libraryService: LibraryService
  ) { }

  users: any;
  booksData: any;
  inventory: any;
  titleG = false;
  getInitData() {
    this.libraryService.getBooks().then((data) => {
      this.booksData = data;
      console.log(this.booksData);
    });
  }
  ngOnInit() {
    this.getInitData();
    this.currentPanel = 'track-books';
  }

  setCurrentPanel(panelName: string) {
    this.currentPanel = panelName;
  }
  logOut() {
    sessionStorage.setItem('isLoogedIn', '0');
    this.router.navigate(['/login']);
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
