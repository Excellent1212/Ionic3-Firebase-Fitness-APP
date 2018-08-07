import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { UserGymsPage } from '../user-gyms/user-gyms';

/**
 * Generated class for the UserSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-settings',
  templateUrl: 'user-settings.html',
})
export class UserSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
  public popoverCtrl: PopoverController) {
    this.menuCtrl.enable(true, 'profileMenu');
    // Abrir menu automaticamente al entrar a UserPage
    this.menuCtrl.close();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSettingsPage');
  }

  popUserGyms(e) {
    let popover = this.popoverCtrl.create(UserGymsPage, {}, {cssClass: '.classesDetails'});
    popover.present();
  }

}
