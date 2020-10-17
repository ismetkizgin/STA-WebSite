import { Component, OnInit } from '@angular/core';
import { MartyrService } from 'src/app/utils';
import { Martyr } from './martyr-info.model';

@Component({
  selector: 'app-martyr-info',
  templateUrl: './martyr-info.component.html',
  styleUrls: ['./martyr-info.component.scss']
})
export class MartyrInfoComponent implements OnInit {

  constructor(private _martyrService: MartyrService) { }
  data: any;
  martyr: Martyr = {
    MartyrFirstName: "Furkan",
    MartyrLastName: "Söğüt",
    MartyrDateOfBirth: "10.02.1990",
    MartyrDateOfDeath: "20.09.2020",
    RankName: "Uzman Çavuş",
    MartyrCity: "Gaziantep",
    MartyrDistrict: "Şahinbey",
    MartyrPlaceOfDeath: "Yüksekova/Hakkari",
    MartyrContent: "Yazılım mühendisi bölüm mezunu",
    MartyrImagePath: "https://upload.wikimedia.org/wikipedia/tr/9/9b/%C3%96mer_Halisdemir.png",
    RankAbbreviation: "Uzmn."
  };
  async ngOnInit() {
    //this.martyr = <Martyr>(await this._martyrService.findAsync(this.data.InstitutionID));
  }

}
