import { Component, OnInit } from '@angular/core';
import { SidebarItemService } from './siderbar-item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent implements OnInit {
  menu: object = [];

  constructor(
    private _sidebarItemService: SidebarItemService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.menu = this._sidebarItemService.menu;
  }

  toggle(indis) {
    this.menu[indis].submenuShowHide = !this.menu[indis].submenuShowHide;
  }

  isActive(paths: string[]) {
    return paths.find((path) => (path == this._router.url ? true : false));
  }
}
