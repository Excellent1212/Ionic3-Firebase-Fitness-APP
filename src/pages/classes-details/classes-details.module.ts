import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassesDetailsPage } from './classes-details';

@NgModule({
  declarations: [
    ClassesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassesDetailsPage),
  ],
})
export class ClassesDetailsPageModule {}
