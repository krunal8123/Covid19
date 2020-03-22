import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestStatusByCountryComponent } from './latest-status-by-country.component';

describe('LatestStatusByCountryComponent', () => {
  let component: LatestStatusByCountryComponent;
  let fixture: ComponentFixture<LatestStatusByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestStatusByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestStatusByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
