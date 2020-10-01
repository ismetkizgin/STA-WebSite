import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/guards';
import {
  ClientLayoutComponent,
  AdminLayoutComponent,
} from './components/layouts';
import {
  HomepageComponent,
  DashboardComponent,
  LoginComponent,
  InstitutionListComponent,
  SignUpComponent,
  AddInstitutionComponent,
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
        data: { title: 'Dashboard', icon: 'fa fa-2x fa-home' },
      },
      {
        path: 'user/add',
        component: SignUpComponent,
        data: { title: 'Sign Up', icon: 'fa fa-2x fa-user' },
      },
      {
        path: 'institutions',
        component: InstitutionListComponent,
        data: { title: 'Institution List', icon: 'fa fa-2x fa-university' },
      },
      {
        path: 'institution/add',
        component: AddInstitutionComponent,
        data: { title: 'Add Institution', icon: 'fa fa-2x fa-university' },
      },
      {
        path: 'institution/edit/:InstitutionID',
        component: AddInstitutionComponent,
        data: { title: 'Add Institution', icon: 'fa fa-2x fa-university' },
      },
      {
        path: 'users',
        component: UserListComponent,
        data: { title: 'User List', icon: 'fa fa-2x fa-users' },
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];
