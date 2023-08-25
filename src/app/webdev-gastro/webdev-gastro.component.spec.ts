import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevGastroComponent } from './webdev-gastro.component';

describe('WebdevGastroComponent', () => {
  let component: WebdevGastroComponent;
  let fixture: ComponentFixture<WebdevGastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevGastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdevGastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
