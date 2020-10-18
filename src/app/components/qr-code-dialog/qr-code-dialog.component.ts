import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-dialog',
  templateUrl: './qr-code-dialog.component.html',
  styleUrls: ['./qr-code-dialog.component.scss']
})
export class QrCodeDialogComponent implements OnInit {

  constructor() { }

  qrdata = 'Initial QR code data string';

  saveAsImage(parent) {
    const parentElement = parent.el.nativeElement.querySelector("img").src;
    let blobData = this.convertBase64ToBlob(parentElement);
    console.log("kayıda başlandı!");
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
      window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
    } else {
      const blob = new Blob([blobData], { type: "image/png" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Qrcode';
      link.click();
    }

  }

  private convertBase64ToBlob(Base64Image: any) {
    const parts = Base64Image.split(';base64,');
    const imageType = parts[0].split(':')[1];
    const decodedData = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: imageType });
  }

  ngOnInit(): void {
  }

}
