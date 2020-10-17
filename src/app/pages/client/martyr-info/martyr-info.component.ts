import { Component, OnInit } from '@angular/core';
import { MartyrService } from 'src/app/utils';
import { Martyr } from './martyr-info.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-martyr-info',
  templateUrl: './martyr-info.component.html',
  styleUrls: ['./martyr-info.component.scss'],
})
export class MartyrInfoComponent implements OnInit {
  constructor(
    private _martyrService: MartyrService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  martyr: Martyr;
  async ngOnInit() {
    const MartyrID = this._activatedRoute.snapshot.paramMap.get('MartyrID');
    try {
      this.martyr = <Martyr>await this._martyrService.findAsync(MartyrID);
    } catch (error) {
      console.log(error);
      this._router.navigateByUrl('/');
    }
  }
}
