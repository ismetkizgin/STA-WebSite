import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MartyrService } from '../../utils/services';

@Component({
  selector: 'app-martyr-image-dialog',
  templateUrl: './martyr-image-dialog.component.html',
  styleUrls: ['./martyr-image-dialog.component.scss'],
})
export class MartyrImageDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _martyrService: MartyrService
  ) {}

  martyrImage: any = this.data.MartyrImagePath;
  martyrNewImage: File = null;

  onFileSelect(event) {
    this.martyrNewImage = event.target.files[0];
    this.preview();
  }

  preview() {
    var mimeType = this.martyrNewImage.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.martyrNewImage);
    reader.onload = (_event) => {
      this.martyrImage = reader.result;
    };
  }

  ngOnInit(): void {}

  async onSave() {
    try {
      let notification: any = {
        message: '',
        panelClass: '',
      };
      if (this.martyrNewImage != null) {
        this._translateService
          .get('Martyr picture has been updated')
          .subscribe((value) => (notification.message = value));
        notification.panelClass = 'notification__success';
        const formData = new FormData();
        formData.append('Image', this.martyrNewImage);
        await this._martyrService.pictureChange(formData, this.data.MartyrID);
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
    } catch (error) {
      this.errorNotification(error);
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
      case 417:
        this._translateService
          .get('Please add a correct file type !')
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
