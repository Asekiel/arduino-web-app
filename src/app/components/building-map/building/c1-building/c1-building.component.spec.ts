import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1BuildingComponent } from './c1-building.component';

describe('C1BuildingComponent', () => {
  let component: C1BuildingComponent;
  let fixture: ComponentFixture<C1BuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1BuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1BuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
