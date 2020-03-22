import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestStatusComponent } from './latest-status.component';

describe('LatestStatusComponent', () => {
  let component: LatestStatusComponent;
  let fixture: ComponentFixture<LatestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
