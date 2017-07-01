import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

/* 모델 선언 */
import { userModel } from '../../models/userModel';

/* 서비스 선언 */
import { AuthService } from '../../services/authService';
import { LoadingService } from '../../services/loadingService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userInfo:userModel = new userModel('','',false,'','',0,'',false,'','','');
  public isLogin: boolean = false;
  public showFlag:boolean = false;
  public cssTopGarden: string = '0%';
  constructor(
     public navCtrl: NavController
    ,public loadingCtrl: LoadingService
    ,private authService: AuthService
    ,private zone: NgZone) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter MainPage');
  }
  ionViewDidEnter() {
    this.authService.afAuth.auth.onAuthStateChanged( (user) => {
      if (user != null) {
        //this.loadingCtrl.load(); - ERROR남 로그인 후 이미 사라진 페이지 에러
        if (user.emailVerified == true ) {
          this.isLogin = true;
          this.cssTopGarden = '20%';
          this.authService.getUserInfo({email: user.email})
            .subscribe(
              (data) => {
                this.zone.run(() => {
                  Object.assign(this.userInfo, <userModel>data[Object.keys(data)[0]]);
                });
              });
          setTimeout(() => {
            this.showFlag = true;
          }, 1000);
        } else {
          //this.authService.doLogout(); 이 라인 키면 오류나는이유가 자꾸 자식이 부모를 호출함
        }
      }
      //this.loadingCtrl.dismiss(); - ERROR남 로그인 후 이미 사라진 페이지 에러
    });
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave MainPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave MainPage');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload MainPage');
  }
  clickMygarden() {
     this.authService.afAuth.auth.onAuthStateChanged( (user) => {
      if(user != null) {
        this.navCtrl.push('MygardenHomePage');
      } else {
        this.navCtrl.push('examplePage');
      }
     });
  }
  clickGroupgarden() {
    alert('Group Garden');
  }
  clickPharmacy() {
    this.authService.doLogout();
  }
  clickBoard() {
    alert('Board');
  }
  clickButtonLogin() {
    var navOptions = {
      animation: 'wp-transition'
    };
    this.navCtrl.push('LoginPage', null, navOptions);
  }
  clickButtonSignTerms() {
    var navOptions = {
      animation: 'wp-transition'
    };
    this.navCtrl.push('SignupTermsPage', null, navOptions);
  }

}
