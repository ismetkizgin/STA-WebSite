import { Component, OnInit } from '@angular/core';
import { Martyr, Rank } from './add-martyr.model';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { getCityName, getDistrictsName } from 'turkey-yl-district';
import { ActivatedRoute, Router } from '@angular/router';
import { MartyrService, LanguageService, RankService } from '../../../utils';
import {
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';

@Component({
  selector: 'app-add-martyr',
  templateUrl: './add-martyr.component.html',
  styleUrls: ['./add-martyr.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
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
    public router: Router,
    private _languageService: LanguageService,
    private _rankService: RankService,
    private _dateAdapter: DateAdapter<any>
  ) {}
  _model: Martyr = new Martyr();
  ranks: Array<Rank>;
  lang: string = this._languageService.getLanguage() || 'tr';

  onFileSelect(event) {
    this._model.Image = event.target.files[0];
  }

  async ngOnInit() {
    this._dateAdapter.setLocale(this.lang);
    this.citys = await getCityName();
    this.ranks = <Array<Rank>>await this._rankService.listAsync();
    const MartyrID = this._activatedRoute.snapshot.paramMap.get('MartyrID');
    if (MartyrID != null) {
      try {
        this._model = <any>await this._martyrService.findAsync(MartyrID);
        console.log(this._model);
        this.getDistricts(this._model.MartyrCity);
      } catch (error) {
        this.errorNotification(error);
        this.router.navigateByUrl('admin');
      }
      this._action = this.updateActionAsync;
    } else {
      this._action = this.insertActionAsync;
    }
  }

  async onSave(martyrRegistrationForm: NgForm) {
    let notification: any = {
      message: '',
      panelClass: '',
    };

    if (martyrRegistrationForm.valid) {
      this._translateService
        .get('Martyr registration is complete')
        .subscribe((value) => (notification.message = value));
      notification.panelClass = 'notification__success';
      if (!(await this._action(martyrRegistrationForm))) return;
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
    if (this._model.MartyrDistrict != null) this._model.MartyrDistrict = '';
  }

  async insertActionAsync(martyrRegistrationForm: NgForm) {
    try {
      console.log(martyrRegistrationForm.value);
      const formData = new FormData();
      formData.append('Image', this._model.Image);
      formData.set(
        'MartyrFirstName',
        martyrRegistrationForm.value.MartyrFirstName
      );
      formData.set(
        'MartyrLastName',
        martyrRegistrationForm.value.MartyrLastName
      );
      formData.set('MartyrCity', martyrRegistrationForm.value.MartyrCity);
      formData.set(
        'MartyrDistrict',
        martyrRegistrationForm.value.MartyrDistrict
      );
      formData.set(
        'MartyrDateOfBirth',
        martyrRegistrationForm.value.MartyrDateOfBrith
      );
      formData.set(
        'MartyrDateOfDeath',
        martyrRegistrationForm.value.MartyrDateOfDeath
      );
      formData.set(
        'MartyrPlaceOfDeath',
        martyrRegistrationForm.value.MartyrPlaceOfDeath
      );
      formData.set('RankName', martyrRegistrationForm.value.RankName);
      formData.set('MartyrContent', martyrRegistrationForm.value.MartyrContent);
      await this._martyrService.insertAsync(formData);
      this._model.Image = null;
      martyrRegistrationForm.resetForm();
      return true;
    } catch (error) {
      console.log(error);
      this.errorNotification(error);
      return false;
    }
  }

  async updateActionAsync(martyrRegistrationForm: NgForm) {
    try {
      await this._martyrService.updateAsync(
        Object.assign(martyrRegistrationForm.value, {
          MartyrID: parseInt(
            this._activatedRoute.snapshot.paramMap.get('MartyrID')
          ),
        })
      );
      return true;
    } catch (error) {
      console.log(error);
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
