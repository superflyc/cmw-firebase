import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {ListComponent} from './crud/list/list.component';
import {DetailComponent} from './crud/detail/detail.component';
import {CrudService} from './crud/crud.service';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TopNavComponent} from './top-nav/top-nav.component';
import {MainContentComponent} from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    TopNavComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp({
          apiKey: 'AIzaSyC2CUd7zcUII_XmFBFqT-b8zldDrkqios0',
          authDomain: 'cmw-firebase.firebaseapp.com',
          databaseURL: 'https://cmw-firebase.firebaseio.com',
          projectId: 'cmw-firebase',
      }),
      AngularFirestoreModule.enablePersistence(),
      BrowserAnimationsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
      MatCardModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
