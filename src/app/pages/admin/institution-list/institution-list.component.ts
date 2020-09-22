import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss'],
})
export class InstitutionListComponent implements OnInit {
  constructor() {}
  data = [
    {
      InstitutionID: '123456',
      InstitutionName: 'STA Kurumu',
      InstitutionCity: 'Manisa',
      InstitutionDistrict: 'Turgutlu',
      InstitutionEmail: 'info@sta.com',
      InstitutionPhone: '+905555555555',
    },
    {
      InstitutionID: '123456',
      InstitutionName: 'STA Kurumu',
      InstitutionCity: 'Manisa',
      InstitutionDistrict: 'Turgutlu',
      InstitutionEmail: 'info@ismetkizgin.com',
      InstitutionPhone: '+905555555555',
    },
    {
      InstitutionID: '123456',
      InstitutionName: 'STA Kurumu',
      InstitutionCity: 'Manisa',
      InstitutionDistrict: 'Turgutlu',
      InstitutionEmail: 'info@sta.com',
      InstitutionPhone: '+905555555555',
    },
    {
      InstitutionID: '123456',
      InstitutionName: 'STA Kurumu',
      InstitutionCity: 'Manisa',
      InstitutionDistrict: 'Turgutlu',
      InstitutionEmail: 'info@sta.com',
      InstitutionPhone: '+905555555555',
    },
    {
      InstitutionID: '123456',
      InstitutionName: 'STA Kurumu',
      InstitutionCity: 'Manisa',
      InstitutionDistrict: 'Turgutlu',
      InstitutionEmail: 'info@ismetkizgin.com',
      InstitutionPhone: '+905555555555',
    },
    {
      InstitutionID: '123456',
      InstitutionName: 'STA Kurumu',
      InstitutionCity: 'Manisa',
      InstitutionDistrict: 'Turgutlu',
      InstitutionEmail: 'info@sta.com',
      InstitutionPhone: '+905555555555',
    },
  ];
  ngOnInit(): void {}
}
