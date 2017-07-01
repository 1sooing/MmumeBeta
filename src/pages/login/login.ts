import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from "../../services/authService";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public errorMessage: string = '';
  public errorCode: string = '';
  constructor(
     public navCtrl: NavController
    ,public navParams: NavParams
    ,private zone: NgZone
    ,private authService: AuthService) {
  }
  ionViewDidLoad() {
  }
  login(form: NgForm){
    this.authService.doLogin( { email : form.value.email, password : form.value.password } )
      .then( (result) => {
        if(result == true) {
          this.navCtrl.popToRoot();
        }
        else if (result == '1001') {
          this.navCtrl.push('SignupEmailConfirmationPage');
        }
      })
      .catch( (error) => {
        if (error.code == 'auth/wrong-password') {
          this.zone.run(() => {
            this.errorMessage = "이메일이나 비밀번호가 잘못되었습니다.";
            this.errorCode="auth/wrong-password";
          })
        }else if(error.code == 'auth/user-not-found'||error.code == 'auth/invalid-email'){
          this.zone.run(() => {
            this.errorMessage = "이메일이나 비밀번호가 잘못되었습니다.";
            this.errorCode="auth/wrong-email";
          })
        }
      });
  }
  closeWindow() {
    this.navCtrl.pop();
  }
}
