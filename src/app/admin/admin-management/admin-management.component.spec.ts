import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminManagementComponent } from './admin-management.component';
import { LibraryService } from '../../../app/services/libraryService';
describe('AdminManagementComponent', () => {
    let comp: AdminManagementComponent;
    let fixture: ComponentFixture<AdminManagementComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let libraryService;
    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [
                AdminManagementComponent
            ],
            imports: [
                HttpClientModule
            ],
            providers: [LibraryService],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AdminManagementComponent);
                comp = fixture.componentInstance;
                de = fixture.debugElement;
                el = de.nativeElement;
                libraryService = TestBed.get(LibraryService);
            });
    });




});

