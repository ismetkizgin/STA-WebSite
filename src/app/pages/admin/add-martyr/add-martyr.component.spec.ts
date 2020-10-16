import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMartyrComponent } from './add-martyr.component';

describe('AddMartyrComponent', () => {
  let component: AddMartyrComponent;
  let fixture: ComponentFixture<AddMartyrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMartyrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMartyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
