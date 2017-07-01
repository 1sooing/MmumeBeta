import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PharmacyHomePage } from './pharmacy-home';

@NgModule({
  declarations: [
    PharmacyHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PharmacyHomePage),
  ],
  exports: [
    PharmacyHomePage
  ]
})
export class PharmacyHomePageModule {}
