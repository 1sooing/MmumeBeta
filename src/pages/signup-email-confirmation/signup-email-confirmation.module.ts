import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupEmailConfirmationPage } from './signup-email-confirmation';

@NgModule({
  declarations: [
    SignupEmailConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupEmailConfirmationPage),
  ],
  exports: [
    SignupEmailConfirmationPage
  ]
})
export class SignupEmailConfirmationPageModule {}
