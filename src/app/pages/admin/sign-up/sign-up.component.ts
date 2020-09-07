import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SignUpModel } from './sign-up.model';
import { AuthService } from '../../../utils/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _authService: AuthService
  ) {}

  _model: SignUpModel = new SignUpModel();
  _passwordShowHide: boolean = false;
  ngOnInit(): void {}

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

  onAutomaticPasswordGeneration(): void {
    this._model.UserPassword = this._authService.creatingPassword(8);
    this._passwordShowHide = true;
  }

  onPasswordToggle(): void {
    if (this._passwordShowHide) this._passwordShowHide = false;
    else this._passwordShowHide = true;
  }
}
