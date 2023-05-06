import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayIsComponent } from './today-is.component';

describe('TodayIsComponent', () => {
  let component: TodayIsComponent;
  let fixture: ComponentFixture<TodayIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
