import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MygardenHomePage } from './mygarden-home';

@NgModule({
  declarations: [
    MygardenHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MygardenHomePage),
  ],
  exports: [
    MygardenHomePage
  ]
})
export class MygardenHomePageModule {}
