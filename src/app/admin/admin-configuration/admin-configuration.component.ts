import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { LibraryService } from '../../../app/services/libraryService';

@Component({
  selector: 'app-admin-configuration',
  providers: [LibraryService],
  templateUrl: './admin-configuration.component.html',
  styleUrls: ['./admin-configuration.component.scss']
})
export class AdminconfigurationComponent implements OnInit {

  constructor(
    private libraryService: LibraryService
  ) { }
  editMode = false;

  configData = {
    'maximumBookAllowed': undefined,
    'maximumDayAllowed': undefined
  };
  ngOnInit() {
    this.libraryService.getConfiguration().then((data) => {
      this.configData.maximumBookAllowed = data.maximumBookAllowed;
      this.configData.maximumDayAllowed = data.maximumDayAllowed;
    }).catch(err => {
      console.log(err);
    });
  }

  updateConfig(data) {
    this.libraryService.updateConfig(data).then(res => {
      console.log('config update successfully', res);
    }).catch(err => {
      console.log('error, while updating configuration.');
    });
  }

}
