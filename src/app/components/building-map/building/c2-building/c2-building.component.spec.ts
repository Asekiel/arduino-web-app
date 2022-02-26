import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2BuildingComponent } from './c2-building.component';

describe('C2BuildingComponent', () => {
  let component: C2BuildingComponent;
  let fixture: ComponentFixture<C2BuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2BuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2BuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
