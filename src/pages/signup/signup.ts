import { Component, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from "../../services/authService";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public errorMessage: string = '';
  public errorCode: string = '';
  constructor(
     public navCtrl: NavController
    ,public navParams: NavParams
    ,public authService: AuthService
    ,private zone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(form: NgForm) {
      this.authService.doSignup( { userName: form.value.userName, email : form.value.email, password : form.value.password } )
        .then( authService => {
            this.authService.doLogin( { email : form.value.email, password : form.value.password } )
              .then( (result) => {
                if(result == '1001') {
                  this.navCtrl.push('SignupEmailConfirmationPage');
                }
              })
              .catch( (error) => { });
          },
          error => {
            if (error.code == 'auth/email-already-in-use') {
              this.zone.run(() => {
                this.errorMessage = "이미 가입된 이메일 주소입니다.";
              })
            }
          });
  }
  closeWindow() {
    this.navCtrl.pop();
  }
}
