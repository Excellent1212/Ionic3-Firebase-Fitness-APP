import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ViewClassPage } from '../view-class/view-class';
import { PopoverController } from 'ionic-angular';
import { ClassesDetailsPage } from '../classes-details/classes-details';

/**
 * Generated class for the ClassesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html',
})
export class ClassesPage {
  public press: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
    public popoverCtrl: PopoverController) {
    // Cerrar menu cuando se ingrese a ClassesPage
    this.menuCtrl.close();
  }

  pushViewClass(){
    this.navCtrl.push(ViewClassPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesPage');
  }

  pressClassDetails(e) {
    let popover = this.popoverCtrl.create(ClassesDetailsPage, {}, {cssClass: '.classesDetails'});
    popover.present();
  }

}
