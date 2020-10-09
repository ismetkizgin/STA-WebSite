import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-martyr-info-dialog',
  templateUrl: './martyr-info-dialog.component.html',
  styleUrls: ['./martyr-info-dialog.component.scss']
})
export class MartyrInfoDialogComponent implements OnInit {

  constructor(private _dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
  ngOnInit(): void {
    
  }

}
