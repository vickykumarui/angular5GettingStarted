import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LibraryService } from '../app/services/libraryService';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let libraryService;
  let alertSpy;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [LibraryService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent); // returns a ComponentFixture
        // The fixture provides access to the component instance itself
        // and to the DebugElement, which is a handle on the component's DOM element.
        comp = fixture.componentInstance; //  BannerComponent test instance
        de = fixture.debugElement; //  throught this we can handle dom element.
        el = de.nativeElement;
        libraryService = TestBed.get(LibraryService);
      });

  }));

  it('should not call service methods before OnInit', () => {
    expect(libraryService).toBeDefined();
  });

  it('should call service methods after initialized', () => {
    fixture.detectChanges();
    try {
      libraryService.setConfiguration();
      libraryService.setBooks();
      libraryService.setUsers();
    } catch (err) {
      alertSpy = spyOn(window, 'alert');
      expect(alertSpy).toHaveBeenCalledWith('a message');
    }
  });
});




