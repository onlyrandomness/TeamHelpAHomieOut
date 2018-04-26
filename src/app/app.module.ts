import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';


import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCpfxNKKJH4rzm-aePiAWQZtgCfrEFtd5Q'
    })
    //AppNavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
