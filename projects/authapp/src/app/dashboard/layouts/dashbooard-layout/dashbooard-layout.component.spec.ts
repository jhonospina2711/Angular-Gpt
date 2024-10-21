import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbooardLayoutComponent } from './dashbooard-layout.component';

describe('DashbooardLayoutComponent', () => {
  let component: DashbooardLayoutComponent;
  let fixture: ComponentFixture<DashbooardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbooardLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbooardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
