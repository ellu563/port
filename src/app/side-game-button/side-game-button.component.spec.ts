import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideGameButtonComponent } from './side-game-button.component';

describe('SideGameButtonComponent', () => {
  let component: SideGameButtonComponent;
  let fixture: ComponentFixture<SideGameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideGameButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideGameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
