import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';


import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'createaccount', component: CreateAccountComponent},
  {path: 'profile', component: ProfilePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CreateAccountComponent,
    MainPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule,
    //AppNavbarComponent
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
