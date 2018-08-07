import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
/**
 * Generated class for the UserGymsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-gyms',
  templateUrl: 'user-gyms.html',
})

export class UserGymsPage {
  public gymSelected;
  public userGyms = [
    "Gym 1",
    "Gym 2",
    "Gym 3"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  gymSelect(userGym: string) {
    this.gymSelected = userGym;
    console.log ("Selected gym: ", userGym);
    this.events.publish("gymSelected", this.gymSelected, 1); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserGymsPage');
  }

}
