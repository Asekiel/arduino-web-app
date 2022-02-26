import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBuildingComponent } from './m-building.component';

describe('MBuildingComponent', () => {
  let component: MBuildingComponent;
  let fixture: ComponentFixture<MBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
