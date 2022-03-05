import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userDashboardComponent } from './user-dashboard.component';

describe('userDashboardComponent', () => {
  let component: userDashboardComponent;
  let fixture: ComponentFixture<userDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ userDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(userDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
