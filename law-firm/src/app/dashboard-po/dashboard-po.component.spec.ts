import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPoComponent } from './dashboard-po.component';

describe('DashboardPoComponent', () => {
  let component: DashboardPoComponent;
  let fixture: ComponentFixture<DashboardPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
