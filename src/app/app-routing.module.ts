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
  AddMartyrComponent,
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
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard', icon: 'fa fa-3x fa-home' },
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: { title: 'Sign Up', icon: 'fa fa-3x fa-user' },
      },
      {
        path: 'institutions',
        component: InstitutionListComponent,
        data: { title: 'Institution List', icon: 'fa fa-3x fa-university' },
      },
      {
        path: 'institution/add',
        component: AddInstitutionComponent,
        data: { title: 'Add Institution', icon: 'fa fa-3x fa-university' },
      },
      {
        path: 'institution/edit/:InstitutionID',
        component: AddInstitutionComponent,
        data: { title: 'Add Institution', icon: 'fa fa-3x fa-university' },
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
export class AppRoutingModule {}
export const routingComponents = [];
