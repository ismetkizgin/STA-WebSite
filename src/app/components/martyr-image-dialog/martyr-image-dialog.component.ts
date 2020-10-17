import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-martyr-image-dialog',
  templateUrl: './martyr-image-dialog.component.html',
  styleUrls: ['./martyr-image-dialog.component.scss']
})
export class MartyrImageDialogComponent implements OnInit {

  constructor() { }

  _model:any=[
    {MartyrImage:"https://upload.wikimedia.org/wikipedia/tr/9/9b/%C3%96mer_Halisdemir.png",Image:""}
  ];
  onFileSelect(event) {
    this._model.Image = event.target.files[0];
  }

  ngOnInit(): void {
  }

}
