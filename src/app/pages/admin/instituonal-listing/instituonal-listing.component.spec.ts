import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituonalListingComponent } from './instituonal-listing.component';

describe('InstituonalListingComponent', () => {
  let component: InstituonalListingComponent;
  let fixture: ComponentFixture<InstituonalListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituonalListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituonalListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
