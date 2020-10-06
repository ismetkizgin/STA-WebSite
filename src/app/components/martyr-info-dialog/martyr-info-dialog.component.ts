import { Component, OnInit,inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-martyr-info-dialog',
  templateUrl: './martyr-info-dialog.component.html',
  styleUrls: ['./martyr-info-dialog.component.scss']
})
export class MartyrInfoDialogComponent implements OnInit {

  constructor(private _dialog:MatDialog) {
    
   }

  closeDialog(){
    
  }
  ngOnInit(): void {
  }

}
