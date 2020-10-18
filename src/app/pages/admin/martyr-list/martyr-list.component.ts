import { Component, OnInit } from '@angular/core';
import { MartyrService, AuthService } from '../../../utils/services';
import { TranslateService } from '@ngx-translate/core';
import { Martyr } from './martyr-list.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Roles } from '../../../models/roles';
import {
  DialogWindowComponent,
  MartyrImageDialogComponent,
} from '../../../components/';
@Component({
  selector: 'app-martyr-list',
  templateUrl: './martyr-list.component.html',
  styleUrls: ['./martyr-list.component.scss'],
})
export class MartyrListComponent implements OnInit {
  constructor(
    private _martyrService: MartyrService,
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _dialog: MatDialog,
    private _authService: AuthService
  ) {}

  martyrs: Array<Martyr>;

  pictureChangeOpenDialog(MartyrImagePath, MartyrID) {
    this._dialog.open(MartyrImageDialogComponent, {
      width: '300px',
      data: {
        MartyrImagePath,
        MartyrID,
      },
    });
  }

  async ngOnInit() {
    this.martyrs = <Array<Martyr>>await this._martyrService.listAsync();
  }

  async martyrDelete(MartyrID) {
    console.log(MartyrID);
    let notification: any = {
      message: '',
      panelClass: 'notification__success',
    };
    const diologRef = this._dialog.open(DialogWindowComponent, {
      data: {
        message: 'Are you sure you want to delete the martyr information ?',
        icon: 'fa fa-exclamation',
      },
    });

    diologRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        try {
          await this._martyrService.deleteAsync({ MartyrID });
          this.martyrs.splice(
            this.martyrs.findIndex((martyr) => martyr.MartyrID == MartyrID),
            1
          );
          this._translateService
            .get('Institution information was successfully deleted')
            .subscribe((value) => (notification.message = value));
        } catch (error) {
          console.log(error);
          notification.panelClass = 'notification__error';
          switch (error.status) {
            case 401:
              this._translateService
                .get('Unauthorized transaction !')
                .subscribe((value) => (notification.message = value));
              break;
            case 417:
              this._translateService
                .get('Please enter correct institution information !')
                .subscribe((value) => (notification.message = value));
              break;
            case 407:
              window.location.reload();
              break;
            default:
              this._translateService
                .get(
                  'Server error occurred, please try again later If the error persists, we ask you to report this to the authorities'
                )
                .subscribe((value) => (notification.message = value));
              break;
          }
        } finally {
          this._snackBar.open(notification.message, 'X', {
            duration: 3000,
            panelClass: notification.panelClass,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
          });
        }
      }
    });
  }

  roleControl(InstitutionID): boolean {
    console.log(InstitutionID);
    if (
      this._authService.currentUserValue.result.InstitutionID ==
        InstitutionID ||
      [Roles.Root, Roles.Administrator].indexOf(
        this._authService.currentUserValue.result.UserStatusName
      ) != -1
    )
      return false;

    return true;
  }
}
