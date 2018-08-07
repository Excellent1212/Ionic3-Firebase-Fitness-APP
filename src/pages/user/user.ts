import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import introJs from 'intro.js/intro.js';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public step1 = true;
  //public step1; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public modalCtrl: ModalController) {
    // Activar menu en la pagina UserPage
    this.menuCtrl.enable(true, 'profileMenu');
    // Abrir menu automaticamente al entrar a UserPage
    this.menuCtrl.open();
    
  }

  hideStep(){
    this.step1 = false; 
  }

  showNotifications(){
    let modal = this.modalCtrl.create(NotificationsPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  
  intro() {
    let intro = introJs.introJs();
    let menuCtrl = this.menuCtrl;

    intro.setOptions({
    steps: [
      {
        intro: "Hello!! we want to give you some recommendations"
      },
      {
        element: '#step1',
        intro: "You can see the profile settings, just tapping in your profile picture",
        position: 'bottom'
  
      },
      {
        element: '#step2',
        intro: "You can see the profile settings, just tapping in your profile picture",
        position: 'bottom'  
      }
    ]
    });
    
    intro.start();
    intro.onexit(() => {
      menuCtrl.close();
      this.hideStep();
    });
  }

  ngAfterViewInit(): void {
    this.intro();
  }
  
}
