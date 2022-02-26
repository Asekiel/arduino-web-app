import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABuildingComponent } from './a-building.component';

describe('ABuildingComponent', () => {
  let component: ABuildingComponent;
  let fixture: ComponentFixture<ABuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ABuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
