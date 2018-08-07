import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';
//import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the ShowPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-posts',
  templateUrl: 'show-posts.html',
})

export class ShowPostsPage {
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
   public restProvider: RestProvider) {
    // Cerrar menu cuando se ingrese a ClassesPage
    this.menuCtrl.close();

      // this.http.get('https://jsonplaceholder.typicode.com/posts', {}, {})
      // .then(data => {

      //   console.log(data.status);
      //   console.log(data.data); // data received by server
      //   console.log(data.headers);

      // })
      // .catch(error => {

      //   console.log(error.status);
      //   console.log(error.error); // error message as string
      //   console.log(error.headers);

      // });

      this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPostsPage');
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
