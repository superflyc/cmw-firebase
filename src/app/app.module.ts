import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule, MatDialogModule,
    MatIconModule, MatInputModule, MatListModule,
    MatMenuModule, MatSelectModule,
    MatSidenavModule, MatSlideToggleModule, MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {ListComponent} from './crud/list/list.component';
import {DetailComponent} from './crud/detail/detail.component';
import {CrudService} from './crud/crud.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// touch friendly
import 'hammerjs';

import {DialogComponent} from './dialog/dialog.component';
import {CollListComponent} from './coll-list/coll-list.component';
import {DataService} from './data/data.service';
import { FormControlComponent } from './form-control/form-control.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        DetailComponent,
        DialogComponent,
        CollListComponent,
        FormControlComponent
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
        HttpClientModule,
        ReactiveFormsModule,

        // Material
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule,

        // Flex-layout
        FlexLayoutModule
    ],
    providers: [
        CrudService,
        DataService
    ],
    entryComponents: [DialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
