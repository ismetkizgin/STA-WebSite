import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }
  data=[
    {
      UserFirstName: 'Kadir Can',
      UserLastName: 'KARADEMİR',
      InstitutionName: 'K',
      UserPhone: '+905555555555'
    },
    {
      UserFirstName: 'Kadir Can',
      UserLastName: 'KARADEMİR',
      InstitutionName: 'K',
      UserPhone: '+905555555555'
    },
    {
      UserFirstName: 'Kadir Can',
      UserLastName: 'KARADEMİR',
      InstitutionName: 'K',
      UserPhone: '+905555555555'
    },
  ]

  ngOnInit(): void {
  }

}
