import { Component, OnInit } from '@angular/core';
import { Institution } from './add-institution.model';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { getCityName, getDistrictsName } from 'turkey-yl-district';

@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.scss'],
})
export class AddInstitutionComponent implements OnInit {
  citys: object;
  districts: object;
  constructor(
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService
  ) {
    this.citys = getCityName();
  }
  _model: Institution = new Institution();

  async ngOnInit() {}

  onSave(signUpForm: NgForm): void {
    let notification: any = {
      message: '',
      panelClass: '',
    };

    if (signUpForm.valid) {
      this._translateService
        .get('User registration is complete')
        .subscribe((value) => (notification.message = value));
      notification.panelClass = 'notification__success';
      console.log(signUpForm.value);
      signUpForm.reset();
    } else {
      this._translateService
        .get('Please fill in the required fields')
        .subscribe((value) => (notification.message = value));
      notification.panelClass = 'notification__error';
    }

    this._snackBar.open(notification.message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: notification.panelClass,
    });
  }

  onCitySelected(event) {
    this.districts = (<any>getDistrictsName(event.target.value)).Districts;
    this._model.InstitutionDistrict = null;
  }
}
