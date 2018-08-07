import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';
import { UserPage } from '../user/user';
import { ModalController, PopoverController } from 'ionic-angular';
import { InfoAppPage } from '../info-app/info-app';
import { NoUserPage } from '../no-user/no-user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//Fondos del slide principal
  backgrounds = [
    'assets/login-bg/active-beauty-beautyrobic-868757.jpg',
    'assets/login-bg/active-adult-athlete-703012.jpg',
    'assets/login-bg/adult-blur-body-196654.jpg',
    'assets/login-bg/barbell-crossfit-equipment-949130.jpg'
  ];

  public passwordType: string = "password";
  public passwordShown: boolean = false;

  constructor(public navCtrl: NavController, public menuCtrl:MenuController, public modalCtrl: ModalController,
    public popoverCtrl: PopoverController, public events: Events) {

    // Desactivar menu de perfil de usuario en la pagina Home (Login)
    this.menuCtrl.enable(false, "profileMenu");
  }

  public showInfoApp(){
    let showinfoapp = this.modalCtrl.create(InfoAppPage);
    showinfoapp.present();
  }

  login = {email:'', password: ''}
  testuser = {email: "test", password: "acceso"}
  LogInForm(){
    if (this.login.email !== this.testuser.email || this.login.password !== this.testuser.password ) {
      this.popoverCtrl.create(NoUserPage).present();

    } else {
      this.events.publish('testuser', this.testuser, 2);
      this.navCtrl.push(UserPage);
    }
  }

  public showPassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = "password";
    }else{
      this.passwordShown = true;
      this.passwordType = "text";
    }
  }

}
