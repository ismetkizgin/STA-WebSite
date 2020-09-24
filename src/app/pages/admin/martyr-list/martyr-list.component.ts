import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-martyr-list',
  templateUrl: './martyr-list.component.html',
  styleUrls: ['./martyr-list.component.scss']
})
export class MartyrListComponent implements OnInit {

  constructor() { }
  data = [
    {
      MartyrID: '1',
      MartyrFirstName: 'Can',
      MartyrLastName: 'KARA',
      MartyrCity: 'İzmir',
      MartyrDistrict: 'Karşıyaka',
      MartyrImagePath: 'assets/img/turkbayragi.jpg',
      RankID: 'Teğmen',
      InstitutionName: 'TSK',
      InstitutionID: 'Root'
    },
    {
      MartyrID: '1',
      MartyrFirstName: 'Can',
      MartyrLastName: 'KARA',
      MartyrCity: 'İzmir',
      MartyrDistrict: 'Karşıyaka',
      MartyrImagePath: 'assets/img/turkbayragi.jpg',
      RankID: 'Teğmen',
      InstitutionName: 'TSK',
      InstitutionID: 'Root'
    },
    {
      MartyrID: '1',
      MartyrFirstName: 'Can',
      MartyrLastName: 'KARA',
      MartyrCity: 'İzmir',
      MartyrDistrict: 'Karşıyaka',
      MartyrImagePath: 'assets/img/turkbayragi.jpg',
      RankID: 'Teğmen',
      InstitutionName: 'TSK',
      InstitutionID: 'Root'
    },

  ]
  ngOnInit(): void {
  }

}
