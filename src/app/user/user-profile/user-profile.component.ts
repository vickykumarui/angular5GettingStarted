import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from '../../../app/services/libraryService';

@Component({
  selector: 'app-user-profile',
  providers: [LibraryService],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() userData;
  constructor(
  ) { }



  ngOnInit() { }
}
