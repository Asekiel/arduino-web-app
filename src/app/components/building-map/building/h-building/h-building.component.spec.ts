import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HBuildingComponent } from './h-building.component';

describe('HBuildingComponent', () => {
  let component: HBuildingComponent;
  let fixture: ComponentFixture<HBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
