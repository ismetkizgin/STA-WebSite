import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SignUpModel } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService
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
    var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var finalCharacters = lowerCharacters;
    finalCharacters = finalCharacters.concat(upperCharacters);
    finalCharacters = finalCharacters.concat(numbers);
    var passwordArray = [];
    for (var i = 1; i < 8; i++) {
      passwordArray.push(
        finalCharacters[Math.floor(Math.random() * finalCharacters.length)]
      );
    }
    this._model.UserPassword = passwordArray.join("");
    this._passwordShowHide = true;
  }

  onPasswordToggle(): void {
    if (this._passwordShowHide) this._passwordShowHide = false;
    else this._passwordShowHide = true;
  }
}
