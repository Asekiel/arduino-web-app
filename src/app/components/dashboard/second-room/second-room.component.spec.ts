import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRoomComponent } from './second-room.component';

describe('SecondRoomComponent', () => {
  let component: SecondRoomComponent;
  let fixture: ComponentFixture<SecondRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
