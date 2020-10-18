import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styleUrls: ['./qr-code-dialog.component.scss'],
})
export class QrCodeDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  qrdata = `${window.location.origin}/martyr/${this.data.MartyrID}`;

  saveAsImage() {
    const canvas = document
      .getElementsByTagName('canvas')[0]
      .toDataURL('image/png');
    const link = document.createElement('a');
    link.href = canvas;
    link.download = `${this.data.MartyrFirstName}_${this.data.MartyrLastName}_QRcode.png`;
    link.click();
  }

  ngOnInit(): void {}
}
