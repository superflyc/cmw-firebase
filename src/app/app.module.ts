import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp({
          apiKey: 'AIzaSyC2CUd7zcUII_XmFBFqT-b8zldDrkqios0',
          authDomain: 'cmw-firebase.firebaseapp.com',
          databaseURL: 'https://cmw-firebase.firebaseio.com',
          projectId: 'cmw-firebase',
      }),
      AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
