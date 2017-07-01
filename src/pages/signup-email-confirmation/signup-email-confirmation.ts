import { Component, NgZone  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/authService';

@IonicPage()
@Component({
  selector: 'page-signup-email-confirmation',
  templateUrl: 'signup-email-confirmation.html',
})
export class SignupEmailConfirmationPage {
  public checkFlag: boolean = false;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public authService: AuthService
    //, public loadingCtrl: LoadingController
    , private zone: NgZone) {
  }
  ionViewDidLoad() {
  }
  emailConfirmation() {
    this.authService.afAuth.auth.currentUser.reload();
    this.authService.afAuth.auth.onAuthStateChanged((user) => {
      if (user != null) {
        if (user.emailVerified == false) {
          this.zone.run(() => {
            this.checkFlag = true;
          })
        } else {
          this.checkFlag = false;
          this.navCtrl.popToRoot();
        }
      } else {
        this.navCtrl.popToRoot();
      }
    });
  }
}
