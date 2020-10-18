import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartyrListComponent } from './martyr-list.component';

describe('MartyrListComponent', () => {
  let component: MartyrListComponent;
  let fixture: ComponentFixture<MartyrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartyrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartyrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
