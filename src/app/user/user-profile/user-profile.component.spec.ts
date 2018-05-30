import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile.component';
import { LibraryService } from '../../../app/services/libraryService';

describe('UserProfileComponent', () => {
  let comp: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let libraryService;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UserProfileComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [LibraryService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserProfileComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
        libraryService = TestBed.get(LibraryService);
      });
  }));

  it('should not call service methods before OnInit', () => {
    expect(libraryService).toBeDefined();
  });



});
