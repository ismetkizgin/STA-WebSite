import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instituonal-listing',
  templateUrl: './instituonal-listing.component.html',
  styleUrls: ['./instituonal-listing.component.scss'],
})
export class InstituonalListingComponent implements OnInit {
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
