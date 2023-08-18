import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisPortfolioComponent } from './this-portfolio.component';

describe('ThisPortfolioComponent', () => {
  let component: ThisPortfolioComponent;
  let fixture: ComponentFixture<ThisPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
