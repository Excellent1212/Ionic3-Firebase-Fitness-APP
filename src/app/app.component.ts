import { Component } from '@angular/core';
import { Platform, NavController, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import introJs from 'intro.js/intro.js';

import { HomePage } from '../pages/home/home';
import { ClassesPage } from '../pages/classes/classes';
import { ShowPostsPage } from '../pages/show-posts/show-posts';
import { UserGymsPage } from '../pages/user-gyms/user-gyms';
import { UserSettingsPage } from '../pages/user-settings/user-settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController
  rootPage:any = HomePage;
  gymReceived = null;
  userReceived;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public popoverCtrl: PopoverController, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('gymSelected', (gymSelected) => {
      console.log('The user gym is: ', gymSelected);
      this.gymReceived = gymSelected;
      return this.gymReceived;
  });         

    // this.receivedLogin();

  }

  // ngAfterViewInit(){
  //   if( this.userReceived != null){
  //     this.intro();
  //   }
  // }

  pushClasses(){
    this.navCtrl.push(ClassesPage);
  }

  logOut(){
    this.navCtrl.push(HomePage);
  }

  pushShowPosts(){
    this.navCtrl.push(ShowPostsPage);
  }

  pushUserSettings(){
    this.navCtrl.push(UserSettingsPage);
  }

  popUserGyms(e) {
    let popover = this.popoverCtrl.create(UserGymsPage, {}, {cssClass: '.classesDetails'});
    popover.present();
  }

  // intro() {
  //   let intro = introJs.introJs();
  //   intro.setOptions({
  //   steps: [
  //     {
  //       intro: "Hello!! we want to give you some recommendations",
  //     },
  //     {
  //       element: '#step1',
  //       intro: "You can see the profile settings, just tapping in your profile picture",
  //       position: 'top'
  
  //     }
  //   ]
  //   });
  //   intro.start();
  // }


  // receivedLogin(){
  //   this.events.subscribe('testuser', testuser => {
  //     this.userReceived = testuser;
  //     console.log("pasaron los datos: " + this.userReceived);
  //     return this.userReceived;
  //   })
  // }

}

