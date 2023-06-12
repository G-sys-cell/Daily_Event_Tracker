import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHome1Component } from './admin-home1.component';

describe('AdminHome1Component', () => {
  let component: AdminHome1Component;
  let fixture: ComponentFixture<AdminHome1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHome1Component]
    });
    fixture = TestBed.createComponent(AdminHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
