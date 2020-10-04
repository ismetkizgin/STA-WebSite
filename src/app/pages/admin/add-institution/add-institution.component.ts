import { Component, OnInit } from '@angular/core';
import { Institution } from './add-institution.model';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { getCityName, getDistrictsName } from 'turkey-yl-district';
import { ActivatedRoute, Router } from '@angular/router';
import { InstitutionService } from '../../../utils/services';

@Component({
  selector: 'app-add-institution',
  templateUrl: './add-institution.component.html',
  styleUrls: ['./add-institution.component.scss'],
})
export class AddInstitutionComponent implements OnInit {
  citys: object;
  districts: object;
  _action: Function;
  _districtSelectedValu: string;

  constructor(
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _activatedRoute: ActivatedRoute,
    private _institutionService: InstitutionService,
    private _router: Router
  ) {}
  _model: Institution = new Institution();

  async ngOnInit() {
    this.citys = await getCityName();
    const InstitutionID = this._activatedRoute.snapshot.paramMap.get(
      'InstitutionID'
    );
    if (InstitutionID != null) {
      try {
        this._model = (<any>(
          await this._institutionService.findAsync(InstitutionID)
        ))[0];
        this.getDistricts(this._model.InstitutionCity);
      } catch (error) {
        console.log(error);
        switch (error.status) {
          case 404:
            this._router.navigateByUrl('admin');
            break;
          default:
            this._router.navigateByUrl('admin');
            break;
        }
      }
      this._action = this.updateActionAsync;
    } else {
      this._action = this.insertActionAsync;
    }
  }

  async onSave(institutionForm: NgForm) {
    let notification: any = {
      message: '',
      panelClass: '',
    };

    if (institutionForm.valid) {
      this._translateService
        .get('Institution registration is complete')
        .subscribe((value) => (notification.message = value));
      notification.panelClass = 'notification__success';
      if (!(await this._action(institutionForm))) return;
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

  async getDistricts(cityName) {
    this.districts = (<any>await getDistrictsName(cityName)).Districts;
  }

  async onCitySelected(cityName) {
    this.getDistricts(cityName);
    if (this._model.InstitutionDistrict != null)
      this._model.InstitutionDistrict = '';
  }

  async insertActionAsync(institutionForm: NgForm) {
    try {
      await this._institutionService.insertAsync(institutionForm.value);
      institutionForm.resetForm();
      return true;
    } catch (error) {
      this.errorNotification(error);
      return false;
    }
  }

  async updateActionAsync(institutionForm: NgForm) {
    try {
      await this._institutionService.updateAsync(
        Object.assign(institutionForm.value, {
          InstitutionID: parseInt(
            this._activatedRoute.snapshot.paramMap.get('InstitutionID')
          ),
        })
      );
      return true;
    } catch (error) {
      this.errorNotification(error);
      return false;
    }
  }

  errorNotification(error) {
    let errorMessage: string;
    switch (error.status) {
      case 401:
        this._translateService
          .get('Unauthorized transaction !')
          .subscribe((value) => (errorMessage = value));
        break;
      case 409:
        this._translateService
          .get('Such an institution is already registered in the system !')
          .subscribe((value) => (errorMessage = value));
        break;
      case 417:
        this._translateService
          .get('Please enter correct institution information !')
          .subscribe((value) => (errorMessage = value));
        break;
      default:
        this._translateService
          .get(
            'Server error occurred, please try again later If the error persists, we ask you to report this to the authorities'
          )
          .subscribe((value) => (errorMessage = value));
        break;
    }
    this._snackBar.open(errorMessage, 'X', {
      duration: 3000,
      panelClass: 'notification__error',
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }
}
