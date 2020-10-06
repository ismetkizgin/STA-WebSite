import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartyrInfoDialogComponent } from './martyr-info-dialog.component';

describe('MartyrInfoDialogComponent', () => {
  let component: MartyrInfoDialogComponent;
  let fixture: ComponentFixture<MartyrInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartyrInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartyrInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
