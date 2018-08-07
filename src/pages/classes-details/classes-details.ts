import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewClassPage } from '../view-class/view-class';
import { ClassMembersPage } from '../class-members/class-members';

/**
 * Generated class for the ClassesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classes-details',
  templateUrl: 'classes-details.html',
})
export class ClassesDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesDetailsPage');
  }

  pushToViewClassPage(){
    this.navCtrl.push(ViewClassPage);
  }

  pushToClassMembersPage(){
    this.navCtrl.push(ClassMembersPage);
  }

}
