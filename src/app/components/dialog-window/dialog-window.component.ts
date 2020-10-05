import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class DialogWindowComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  async closeDialogButton() {
    this._dialog.closeAll();
  }
  ngOnInit(): void {
  }

}
