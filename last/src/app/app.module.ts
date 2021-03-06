import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http'
import { AddPage } from '../pages/add/add';
import { CPage } from '../pages/c/c';
import { ChangePage } from '../pages/change/change';
import { RegPage } from '../pages/reg/reg';
import { OnloadPage } from '../pages/onload/onload';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    AddPage,
    CPage,
    ChangePage,
    RegPage,
    OnloadPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      tabsHideOnSubPages:true,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    AddPage,
    CPage,
    ChangePage,
    RegPage,
    OnloadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
