import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/authService'
/**
 * Generated class for the PharmacyHomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pharmacy-home',
  templateUrl: 'pharmacy-home.html',
})
export class PharmacyHomePage {

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,public authService: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PharmacyHomePage');
  }
  closeWindow() {
    this.navCtrl.pop();
  }
  logOut() {
    this.authService.doLogout().then(() => {
        console.log("complete logOut");
      },
      (error) => {

      });
    this.navCtrl.popToRoot();
  }
}
