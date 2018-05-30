import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuComponent } from './admin-menu.component';

describe('AdminPanelComponent', () => {
    let component: AdminMenuComponent;
    let fixture: ComponentFixture<AdminMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminMenuComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
