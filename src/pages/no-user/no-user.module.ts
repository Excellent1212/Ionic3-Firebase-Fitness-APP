import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoUserPage } from './no-user';

@NgModule({
  declarations: [
    NoUserPage,
  ],
  imports: [
    IonicPageModule.forChild(NoUserPage),
  ],
})
export class NoUserPageModule {}
