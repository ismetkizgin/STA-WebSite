import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../../utils/services';
import { Institution } from './institution-list.model';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { InstitutionInfoDialogComponent, DialogWindowComponent } from '../../../components';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss'],
})
export class InstitutionListComponent implements OnInit {
  constructor(
    private _institutionService: InstitutionService,
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _dialog: MatDialog
  ) {}

  data: Institution[];
  searchText: string;

  async ngOnInit() {
    this.data = <Institution[]>await this._institutionService.listAsync();
  }

  async onInstitutionDelete(InstitutionID) {
    let notification: any = {
      message: '',
      panelClass: 'notification__success',
    };
    const diologRef = this._dialog.open(DialogWindowComponent, {
      data: {
        message: 'Are you sure you want to delete the user ?',
        icon: 'fa fa-exclamation',
      },
    });
    diologRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        try {
          await this._institutionService.deleteAsync({ InstitutionID });
          this.data.splice(
            this.data.findIndex(
              (institution) => institution.InstitutionID == InstitutionID
            ),
            1
          );
          this._translateService
            .get('Institution information was successfully deleted')
            .subscribe((value) => (notification.message = value));
        } catch (error) {
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

  examineOpenDialog(InstitutionID) {
    this._dialog.open(InstitutionInfoDialogComponent, {
      width: '90%',
      data: { InstitutionID },
    });
  }

  x(){
    this.searchText = this.searchText.toLocaleLowerCase('tr');
  }
}
