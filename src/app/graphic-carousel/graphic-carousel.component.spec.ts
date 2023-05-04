import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCarouselComponent } from './graphic-carousel.component';

describe('GraphicCarouselComponent', () => {
  let component: GraphicCarouselComponent;
  let fixture: ComponentFixture<GraphicCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
