import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionInfoDialogComponent } from './institution-info-dialog.component';

describe('InstitutionInfoDialogComponent', () => {
  let component: InstitutionInfoDialogComponent;
  let fixture: ComponentFixture<InstitutionInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionInfoDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
