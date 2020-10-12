import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/guards';
import { Roles } from './models/roles';

import {
  ClientLayoutComponent,
  AdminLayoutComponent,
} from './components/layouts';
import {
  HomepageComponent,
  DashboardComponent,
  LoginComponent,
  InstitutionListComponent,
  AddUserComponent,
  AddInstitutionComponent,
  AddMartyrComponent,
  MartyrListComponent,
  UserListComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [{ path: '', component: HomepageComponent }],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard', icon: 'fa fa-2x fa-tachometer-alt' },
      },
      {
        path: 'user/add',
        component: AddUserComponent,
        data: {
          title: 'User Add',
          icon: 'fa fa-2x fa-user-plus',
          authorize: [Roles.Root, Roles.Administrator, Roles.InstitutionAdmin],
        },
      },
      {
        path: 'user/edit/:UserID',
        component: AddUserComponent,
        data: {
          title: 'User Edit',
          icon: 'fa fa-2x fa-user-edit',
          authorize: [Roles.Root, Roles.Administrator, Roles.InstitutionAdmin],
        },
      },
      {
        path: 'institutions',
        component: InstitutionListComponent,
        data: {
          title: 'Institution List',
          icon: 'fa fa-2x fa-map',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'institution/add',
        component: AddInstitutionComponent,
        data: {
          title: 'Institution Add',
          icon: 'fa fa-2x fa-plus-square',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'institution/edit/:InstitutionID',
        component: AddInstitutionComponent,
        data: {
          title: 'Institution Edit',
          icon: 'fa fa-2x fa-edit',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'users',
        component: UserListComponent,
        data: {
          title: 'User List',
          icon: 'fa fa-2x fa-address-book',
          authorize: [Roles.Root, Roles.Administrator, Roles.InstitutionAdmin],
        },
      },
      {
        path: 'martyrs',
        component: MartyrListComponent,
        data: { title: 'Martyr List', icon: 'fa fa-3x fa-users' },
      },
      {
        path: 'martyr/add',
        component: AddMartyrComponent,
        data: { title: 'Martyr Addition Page', icon: 'fas fa-user-times fa-2x' },
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [];
