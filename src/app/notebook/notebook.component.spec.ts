import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';

import { NotebookComponent } from "./notebook.component"
import { MaterialModule } from "../material.module";

describe('NotepageComponent', () => {
  let component: NotebookComponent;
  let fixture: ComponentFixture<NotebookComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule(
      {
        declarations: [NotebookComponent],
        imports: [
          RouterTestingModule.withRoutes([]),
          MaterialModule,
        ]
      }
    ).compileComponents();
    fixture = TestBed.createComponent(NotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  describe('navigation', () => {
    it('should display correct navigation when #pageIndex=0', () => {
      component.pageIndex = 0;
      expect(component.hasPrevPage()).toBe(false);
      expect(component.hasNextPage()).toBe(true);
      expect(component.getNextPageNum()).toBe(2);
    });
    it('should display correct navigation when #pageIndex=1', () => {
      component.pageIndex = 1;
      expect(component.hasPrevPage()).withContext('hasPrevPage').toBe(true);
      expect(component.hasNextPage()).withContext('hasNextPage').toBe(true);
      expect(component.getNextPageNum()).toBe(3);
    })
    it('should display correct navigation when #pageIndex=4', () => {
      component.pageIndex = 4;
      expect(component.hasPrevPage()).withContext('hasPrevPage').toBe(true);
      expect(component.hasNextPage()).withContext('hasNextPage').toBe(false);
      expect(component.getNextPageNum()).toBe(5);
    })
  });
});
