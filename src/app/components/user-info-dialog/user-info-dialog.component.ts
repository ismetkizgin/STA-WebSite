import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Institution, User } from './user-info-dialog.model';
import { InstitutionService, UserService } from '../../utils/services';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.scss'],
})
export class UserInfoDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _institutionService: InstitutionService,
    private _userService: UserService
  ) {}
  user: User = new User();
  institution: Institution = new Institution();

  async ngOnInit() {
    console.log(this.data);
    this.user = <User>await this._userService.findAsync(this.data.UserID);
    this.institution = <Institution>(
      await this._institutionService.findAsync(this.user.InstitutionID)
    );
  }
}
