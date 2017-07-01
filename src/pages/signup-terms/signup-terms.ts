import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup-terms',
  templateUrl: 'signup-terms.html',
})
export class SignupTermsPage {
  visible: boolean = false;
  visibleSecond: boolean = false;
  checked: boolean = true;
  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,public viewCtrl: ViewController
    ,public appCtrl: App) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignTermsPage');
  }
  toggle(){
    this.visible = !this.visible;
  }
  toggle2(){
    this.visibleSecond = !this.visibleSecond;
  }
  clickButtonSignup(){
    this.navCtrl.push('SignupPage');
  };
  clickButtonLogin(){
    this.navCtrl.push('LoginPage');
  };
  isChecked(){
    if ((this.visible == false) || (this.visibleSecond == false)){
      return true;
    }else{
      return false;
    };
  }
  closeWindow() {
    this.viewCtrl.dismiss();
  }
}
