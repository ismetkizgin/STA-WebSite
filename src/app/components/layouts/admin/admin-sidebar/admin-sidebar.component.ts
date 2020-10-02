import { Component, OnInit } from '@angular/core';
import { SidebarItemService } from './siderbar-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent implements OnInit {
  menu: Array<any> = [];
  constructor(
    private _sidebarItemService: SidebarItemService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._sidebarItemService.menu.forEach((item: any) => {
      if (
        !item.authorize ||
        item.authorize.indexOf(
          JSON.parse(localStorage.getItem('currentUser')).result.UserStatusName
        ) != -1
      )
        this.menu.push(item);
    });
  }

  toggle(indis) {
    this.menu[indis].submenuShowHide = !this.menu[indis].submenuShowHide;
  }

  isActive(paths: string[]) {
    return paths.find((path) => (path == this._router.url ? true : false));
  }
}
