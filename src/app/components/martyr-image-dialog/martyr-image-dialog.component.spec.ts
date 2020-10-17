import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartyrImageDialogComponent } from './martyr-image-dialog.component';

describe('MartyrImageDialogComponent', () => {
  let component: MartyrImageDialogComponent;
  let fixture: ComponentFixture<MartyrImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartyrImageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartyrImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
