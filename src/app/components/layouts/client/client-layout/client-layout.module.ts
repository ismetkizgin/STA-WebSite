import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientLayoutComponent } from './client-layout.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ClientBannerComponent } from '../client-banner/client-banner.component';
import { ClientHeaderComponent } from '../client-header/client-header.component';
import { ClientFooterComponent } from '../client-footer/client-footer.component';
import { 
  HomepageComponent,
  MartyrInfoComponent
} from '../../../../pages/client';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ClientLayoutComponent,
    HomepageComponent,
    MartyrInfoComponent,
    ClientBannerComponent,
    ClientHeaderComponent,
    ClientFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
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