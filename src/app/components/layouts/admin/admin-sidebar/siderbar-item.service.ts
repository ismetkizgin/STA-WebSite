import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '../../../../models/roles';

@Injectable({
  providedIn: 'root',
})
export class SidebarItemService {
  constructor(private _router: Router) {}

  _url = this._router.routerState.snapshot.url;
  menu: Array<object> = [
    {
      title: 'Dashboard',
      icon: 'fa-microchip',
      link: '/admin'
    },
    {
      title: 'User Transactions',
      icon: 'fa-user',
      linkActive: ['/admin/users', '/admin/user/add'],
      submenuShowHide: this.getChildUrlActiveState(['user', 'users']),
      submenu: [
        {
          title: 'User List',
          link: '/admin/users',
        },
        {
          title: 'User Add',
          link: '/admin/user/add',
        },
      ],
      authorize: [Roles.Root, Roles.InstitutionAdmin, Roles.Administrator],
    },
    {
      title: 'Institution Transactions',
      icon: 'fa-user',
      linkActive: ['/admin/institutions', '/admin/institution/add'],
      submenuShowHide: this.getChildUrlActiveState([
        'institution',
        'institutions',
      ]),
      submenu: [
        {
          title: 'Institution List',
          link: '/admin/institutions',
        },
        {
          title: 'Institution Add',
          link: '/admin/institution/add',
        },
      ],
      authorize: [Roles.Root, Roles.Administrator],
    },
  ];

  getChildUrlActiveState(path: string[]) {
    return path.find((x) => x == this._url.split('/')[2]) ? true : false;
  }
}
