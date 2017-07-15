import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../services/authService';
import { LoadingService } from '../services/loadingService';
import { MmumesService } from '../services/mmumesService';
import { UsersSerivce } from '../services/usersSerivce';
import { TestService } from '../services/testService';

export const firebaseConfig={
  apiKey: "AIzaSyDBxXx4C3dQIe0EWBQTzWNrUavzx-Ja51E",
  authDomain: "mmume-f390e.firebaseapp.com",
  databaseURL: "https://mmume-f390e.firebaseio.com",
  storageBucket: "mmume-f390e.appspot.com",
  messagingSenderId: "434154679927"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    LoadingService,
    MmumesService,
    UsersSerivce,
    TestService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
