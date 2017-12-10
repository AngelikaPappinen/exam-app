import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2'; //very important to remember import
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth'; //these steps will create firebase authentication
import { HttpModule } from '@angular/http'; //new imports
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from '../providers/firebase/firebase';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactsPage } from '../pages/contacts/contacts';
import { EducationPage } from '../pages/education/education';
import { ExperiencePage } from '../pages/experience/experience';
import { HobbiesPage } from '../pages/hobbies/hobbies';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs'; 
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { TechnicalPage } from '../pages/technical/technical'; //add freshly made pages Angelika Pappinen 1500967
import { SoftPage } from '../pages/soft/soft'; //add freshly made pages Angelika Pappinen 1500967

const firebaseConfig = {
  apiKey: "AIzaSyCEpTLvrxn43a2S-mFhWFO7KBXfQEfBJEY",
  authDomain: "examapp-645ed.firebaseapp.com",
  databaseURL: "https://examapp-645ed.firebaseio.com",
  projectId: "examapp-645ed",
  storageBucket: "examapp-645ed.appspot.com",
  messagingSenderId: "785266063623"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactsPage,
    EducationPage,
    LoggedinPage,
    ExperiencePage,
    TabsPage,
    HobbiesPage,
    LoginPage,
    RegisterPage,
    TechnicalPage, 
    SoftPage
//Make sure that new pages are added to declarations and bootstrap! Angelika Pappinen
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),  //Add this to make angularfire work
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactsPage,
    EducationPage,
    LoggedinPage,
    ExperiencePage,
    HobbiesPage,
    TabsPage, //remember to add also to declarations
    LoginPage,
    RegisterPage,
    TechnicalPage,
    SoftPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
