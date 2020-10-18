import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartyrInfoComponent } from './martyr-info.component';

describe('MartyrInfoComponent', () => {
  let component: MartyrInfoComponent;
  let fixture: ComponentFixture<MartyrInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartyrInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartyrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
