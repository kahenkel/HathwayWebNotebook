import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { NotepageComponent } from "./notepage.component"
import { MaterialModule } from "../material.module";

describe('NotepageComponent', () => {
    let component: NotepageComponent;
    let fixture: ComponentFixture<NotepageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule(
            {
                declarations: [NotepageComponent],
                imports: [
                    RouterTestingModule.withRoutes([]),
                    MaterialModule,
                ]
            }
        ).compileComponents();
        fixture = TestBed.createComponent(NotepageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    }));

    it('should create', () => {
        expect(component).toBeDefined();
    });

});