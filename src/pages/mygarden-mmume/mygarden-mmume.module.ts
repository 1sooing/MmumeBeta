import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MygardenMmumePage } from './mygarden-mmume';

@NgModule({
  declarations: [
    MygardenMmumePage,
  ],
  imports: [
    IonicPageModule.forChild(MygardenMmumePage),
  ],
  exports: [
    MygardenMmumePage
  ]
})
export class MygardenMmumePageModule {}
