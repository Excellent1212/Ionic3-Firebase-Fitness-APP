import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassMembersPage } from './class-members';

@NgModule({
  declarations: [
    ClassMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassMembersPage),
  ],
})
export class ClassMembersPageModule {}
