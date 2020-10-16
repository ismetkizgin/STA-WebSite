import { Component, OnInit } from '@angular/core';
import { Martyr } from './homepage.model';
import { MartyrService } from '../../../utils/services';
import * as moment from 'moment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private _martyrService: MartyrService) {}
  moment = moment;
  martyrs: Array<Martyr>;
  searchText: string;

  async ngOnInit() {
    this.martyrs = <Array<Martyr>>await this._martyrService.listAsync();
  }
}
