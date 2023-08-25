import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeImgsComponent } from './welcome-imgs.component';

describe('WelcomeImgsComponent', () => {
  let component: WelcomeImgsComponent;
  let fixture: ComponentFixture<WelcomeImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeImgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
