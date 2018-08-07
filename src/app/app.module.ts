//Node Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';



//Ionic Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { InfoAppPage } from '../pages/info-app/info-app';
import { ClassesPage } from '../pages/classes/classes';
import { NotificationsPage } from '../pages/notifications/notifications'
import { ViewClassPage } from '../pages/view-class/view-class'
import { NoUserPage } from '../pages/no-user/no-user';
import { ClassesDetailsPage } from '../pages/classes-details/classes-details';
import { ClassMembersPage } from '../pages/class-members/class-members';
import { ShowPostsPage } from '../pages/show-posts/show-posts';
import { RestProvider } from '../providers/rest/rest';
import { UserSettingsPage } from '../pages/user-settings/user-settings';
import { UserGymsPage } from '../pages/user-gyms/user-gyms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    InfoAppPage,
    ClassesPage,
    NotificationsPage,
    ViewClassPage,
    NoUserPage,
    ClassesDetailsPage,
    ClassMembersPage,
    ShowPostsPage,
    UserSettingsPage,
    UserGymsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularSvgIconModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    InfoAppPage,
    ClassesPage,
    NotificationsPage,
    ViewClassPage,
    NoUserPage,
    ClassesDetailsPage,
    ClassMembersPage,
    ShowPostsPage,
    UserSettingsPage,
    UserGymsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {

}
