import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* 서비스 선언 */
import { MmumesService } from '../../services/mmumesService';

@IonicPage()
@Component({
  selector: 'page-mygarden-home',
  templateUrl: 'mygarden-home.html',
})
export class MygardenHomePage {
  constructor(
     public navCtrl: NavController
    ,public navParams: NavParams
    ,public mmumesService: MmumesService) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MygardenHomePage');
    this.mmumesService.setMmumesList();
  }
  closeWindow() {
    this.navCtrl.pop();
  }
  test() {
    this.navCtrl.push('TestPage');
  }
}
