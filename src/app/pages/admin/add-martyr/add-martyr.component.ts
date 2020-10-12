import { Component, OnInit } from '@angular/core';
import { Martyr } from './add-martyr.model';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { getCityName, getDistrictsName } from 'turkey-yl-district';
import { ActivatedRoute, Router } from '@angular/router';
import { MartyrService } from '../../../utils/services';


@Component({
  selector: 'app-add-martyr',
  templateUrl: './add-martyr.component.html',
  styleUrls: ['./add-martyr.component.scss'],
})
export class AddMartyrComponent implements OnInit {
  citys: object;
  districts: object;
  _action: Function;
  _districtSelectedValu: string;

  constructor(
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _activatedRoute: ActivatedRoute,
    private _martyrService: MartyrService,
    private _router: Router
  ) { }
  _model: Martyr = new Martyr();

  async ngOnInit() {
    this.citys = await getCityName();
    const MartyrID = this._activatedRoute.snapshot.paramMap.get(
      'MartyrID'
    );
    if (MartyrID != null) {
      try {
        // this._model = (<any>(
        // await this._martyrService.findAsync(MartyrID)
        // ))[0];
        //this.getDistricts(this._model.MartyrCity);
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

  async onSave(signUpForm: NgForm) {
    let notification: any = {
      message: '',
      panelClass: '',
    };

    if (signUpForm.valid) {
      this._translateService
        .get('User registration is complete')
        .subscribe((value) => (notification.message = value));
      notification.panelClass = 'notification__success';
      if (!(await this._action(signUpForm))) return;
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
    if (this._model.MartyrDistrict != null)
      this._model.MartyrDistrict = '';
  }

  async insertActionAsync(martyrRegistrationForm: NgForm) {
    try {
      await this._martyrService.insertAsync(martyrRegistrationForm.value);
      martyrRegistrationForm.resetForm();
      return true;
    } catch (error) {
      this.errorNotification(error);
      return false;
    }
  }

  async updateActionAsync(signUpForm: NgForm) {
    try {
      // await this._martyrService.updateAsync(
      //   Object.assign(signUpForm.value, {
      //    MartyrID: parseInt(
      //      this._activatedRoute.snapshot.paramMap.get('MartyrID')
      //   ),
      // })
      // );
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
          .get('Such an martyr is already registered in the system !')
          .subscribe((value) => (errorMessage = value));
        break;
      case 417:
        this._translateService
          .get('Please enter correct martyr information !')
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

