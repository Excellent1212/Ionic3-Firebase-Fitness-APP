import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserGymsPage } from './user-gyms';

@NgModule({
  declarations: [
    UserGymsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserGymsPage),
  ],
})
export class UserGymsPageModule {}
