import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteTopbarComponent } from './site-topbar.component';

describe('SiteTopbarComponent', () => {
  let component: SiteTopbarComponent;
  let fixture: ComponentFixture<SiteTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteTopbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
