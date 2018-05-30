import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../../app/services/libraryService';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-main',
  providers: [LibraryService],
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})
export class UserMainComponent implements OnInit {
  constructor(
    private libraryService: LibraryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  issuedBook: any;
  logs: any;
  currentPanel: any;
  userPanelModel = {
    'user': undefined,
    'booksData': undefined,
    'configuration': undefined,
    'issueMetadata': undefined
  };

  getInitData() {
    this.libraryService.getMetadataToIssue().subscribe((data) => {
      this.userPanelModel.issueMetadata = data;
    });
    this.libraryService.getBooks().then((data) => {
      this.userPanelModel.booksData = data;
    });
    this.libraryService.getConfiguration().then((data) => {
      this.userPanelModel.configuration = data;
    });
    this.libraryService.getInMemoryData('currentUser').then((data) => {
      this.userPanelModel.user = data;
      this.issuedBook = this.userPanelModel.user.issuedBooks;
      this.logs = this.userPanelModel.user.logs;
    }).catch((err) => {
      alert(err);
    });
  }

  ngOnInit() {
    this.getInitData();
    this.currentPanel = 'user-profile';
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
