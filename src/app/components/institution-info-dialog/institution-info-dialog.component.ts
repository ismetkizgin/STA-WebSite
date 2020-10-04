import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Institution, User } from './institution-info-dialog.model';
import { InstitutionService } from '../../utils/services';

@Component({
  selector: 'app-institution-info-dialog',
  templateUrl: './institution-info-dialog.component.html',
  styleUrls: ['./institution-info-dialog.component.scss'],
})
export class InstitutionInfoDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _institutionService: InstitutionService
  ) {}

  institution: Institution = new Institution();

  async ngOnInit() {
    this.institution = <Institution>(
      await this._institutionService.findAsync(this.data.InstitutionID)
    );
  }
}
