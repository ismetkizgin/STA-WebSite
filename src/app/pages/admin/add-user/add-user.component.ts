import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { UserModel } from './user.model';
import {
  AuthService,
  InstitutionService,
  UserService,
} from '../../../utils/services';
import { Roles } from '../../../models/roles';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _authService: AuthService,
    public _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _institutionService: InstitutionService,
    private _userService: UserService
  ) {}

  _action: Function;
  _model: UserModel = new UserModel();
  _passwordShowHide: boolean = false;
  institutions: Array<object>;
  _UserStatusName = this._authService.currentUserValue.result.UserStatusName;
  userRoles: Array<object> = [
    {
      userStatusName: 'Administrator',
      authorize:
        [Roles.Root].indexOf(this._UserStatusName) === -1 ? false : true,
    },
    {
      userStatusName: 'Institution Admin',
      authorize:
        [Roles.Root, Roles.Administrator].indexOf(this._UserStatusName) === -1
          ? false
          : true,
    },
    {
      userStatusName: 'Editor',
      authorize:
        [Roles.Root, Roles.Administrator, Roles.InstitutionAdmin].indexOf(
          this._UserStatusName
        ) === -1
          ? false
          : true,
    },
  ];

  async ngOnInit() {
    const UserID = this._activatedRoute.snapshot.paramMap.get('UserID');
    this.institutions = <Array<object>>(
      await this._institutionService.listAsync()
    );
    console.log(this.institutions);
    console.log('deneme');
    if (UserID != null) {
      try {
        this._model = <any>await this._userService.findAsync(UserID);
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

  async onSave(userForm: NgForm) {
    let notification: any = {
      message: '',
      panelClass: '',
    };

    if (userForm.valid) {
      this._translateService
        .get('User registration is complete')
        .subscribe((value) => (notification.message = value));
      notification.panelClass = 'notification__success';
      if (!(await this._action(userForm))) return;
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

  async insertActionAsync(userForm: NgForm) {
    try {
      await this._userService.insertAsync(userForm.value);
      userForm.resetForm();
      return true;
    } catch (error) {
      this.errorNotification(error);
      return false;
    }
  }

  async updateActionAsync(userForm: NgForm) {
    try {
      await this._userService.updateAsync(
        Object.assign(userForm.value, {
          UserID: parseInt(
            this._activatedRoute.snapshot.paramMap.get('UserID')
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
          .get('Such an user is already registered in the system !')
          .subscribe((value) => (errorMessage = value));
        break;
      case 417:
        this._translateService
          .get('Please enter correct user information !')
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
