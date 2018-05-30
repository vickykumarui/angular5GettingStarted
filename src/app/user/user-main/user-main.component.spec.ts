//  import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
//  import { By } from '@angular/platform-browser';
//  import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
//  import { Router } from '@angular/router';
//  import {HttpClientModule} from '@angular/common/http';
//  import { UserMainComponent } from './user/user-main.component';
//  import { LibraryService } from '../../app/services/libraryService';

//  describe('UserMainComponent', () => {
//    let comp: UserMainComponent;
//    let fixture: ComponentFixture<UserMainComponent>;
//    let de: DebugElement;
//    let el: HTMLElement;
//    let libraryService, libraryServiceStub;
//    let currPanelSpy, initDataSpy;
//    beforeEach(async(() => {

//      TestBed.configureTestingModule({
//        declarations: [
//          UserMainComponent
//        ],
//        imports: [
//          HttpClientModule
//        ],
//        providers: [LibraryService],
//        schemas: [ NO_ERRORS_SCHEMA ]
//      })
//      .compileComponents()
//      .then(() => {
//        fixture = TestBed.createComponent(UserMainComponent); // returns a ComponentFixture
//        // The fixture provides access to the component instance itself
//        // and to the DebugElement, which is a handle on the component's DOM element.
//        comp = fixture.componentInstance; //  BannerComponent test instance
//        de = fixture.debugElement; //  throught this we can handle dom element.
//        el = de.nativeElement;
//        libraryService = TestBed.get(LibraryService);
//      });

//    }));

//    it('should not call service methods before OnInit', () => {
//        expect(libraryService).toBeDefined();
//    });

//    it('should call service methods after initialized', () => {
//      initDataSpy = spyOn(comp, 'getInitData');
//      fixture.detectChanges();
//      expect(initDataSpy).toHaveBeenCalled();
//      //  .then(()=>{
//      //    libraryService.getMetadataToIssue().subscribe((data) => {
//      //      expect(comp.userPanelModel.issueMetadata).toBe(Object);
//      //    })
//      //    libraryService.getBooks().then((data) => {
//      //      expect(comp.userPanelModel.booksData).toBe(Object);
//      //    });
//      //    libraryService.getConfiguration().then((data) => {
//      //      expect(comp.userPanelModel.configuration).toBe(Object);
//      //    })
//      //    libraryService.getInMemoryData("currentUser").then((data)=>{
//      //      expect(comp.userPanelModel.user).toBe(Object);
//      //      expect(comp.issuedBook).toBe(comp.userPanelModel.user.issuedBooks);
//      //      expect(comp.logs).toBe(comp.userPanelModel.user.logs);
//      //    }).catch((err)=>{
//      //      alert(err);
//      //    })
//      //  });
//      expect(comp.currentPanel).toBe('user-profile');
//    });

//    //  action for set current panel.
//    it('should select current panel on click of button', fakeAsync(() => {
//      const expectedPanel = 'user-profile';
//      const button = de.query(By.css('button'));
//      console.log(button);
//      el = button.nativeElement;
//      el.click();
//      //  currPanelSpy = spyOn(comp, 'setCurrentPanel');
//      //  expect(currPanelSpy).toHaveBeenCalled();
//      tick();
//      expect(comp.currentPanel).toBe(expectedPanel);
//    }));

//  });
