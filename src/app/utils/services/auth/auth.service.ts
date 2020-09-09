import { Injectable } from '@angular/core';
import { ApiFetchService } from '../api-fetch/api-fetch.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _apiFetchService: ApiFetchService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService
  ) {}

  async login(user) {
    try {
      const respone: any = await this._apiFetchService.requestAsync(
        'POST',
        'login',
        user
      );
      localStorage.setItem('token', respone.token);
      localStorage.setItem('userInformation', respone.result);
      this._router.navigateByUrl('admin');
    } catch (error) {
      let errorMessage: string;
      switch (error.status) {
        case 404:
          this._translateService
            .get('There is no such user!')
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
      });
    }
  }

  async tokenControl() {
    try {
      if (localStorage.getItem('token') != null) {
        const response: any = await this._apiFetchService.requestAsync(
          'GET',
          'token-ping',
          null,
          true
        );
        return response;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  creatingPassword(passwordLength) {
    var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var finalCharacters = lowerCharacters;
    finalCharacters = finalCharacters.concat(upperCharacters);
    finalCharacters = finalCharacters.concat(numbers);
    var passwordArray = [];
    for (var i = 1; i < passwordLength; i++) {
      passwordArray.push(
        finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
      );
    }
    return passwordArray.join('');
  }
}
