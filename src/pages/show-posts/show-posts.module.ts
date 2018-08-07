import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPostsPage } from './show-posts';


@NgModule({
  declarations: [
    ShowPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPostsPage),
  ],
})
export class ShowPostsPageModule {}


