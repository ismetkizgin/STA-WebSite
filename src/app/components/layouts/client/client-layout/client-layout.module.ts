import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout.component';
import { HomepageComponent } from '../../../../pages/client/homepage/homepage.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ClientBannerComponent } from '../client-banner/client-banner.component';
import { ClientHeaderComponent } from '../client-header/client-header.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { NgSearchFilterModule } from 'ng-search-filter';
import { FormsModule } from '@angular/forms';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ClientLayoutComponent,
    HomepageComponent,
    ClientBannerComponent,
    ClientHeaderComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    NgSearchFilterModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
})
export class ClientLayoutModule { }