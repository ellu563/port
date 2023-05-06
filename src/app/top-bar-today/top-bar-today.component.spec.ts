import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarTodayComponent } from './top-bar-today.component';

describe('TopBarTodayComponent', () => {
  let component: TopBarTodayComponent;
  let fixture: ComponentFixture<TopBarTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
