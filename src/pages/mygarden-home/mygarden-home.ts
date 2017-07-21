import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/* 서비스 선언 */
import { MmumesService } from '../../services/mmumesService';
import { TestService } from '../../services/testService';

import { testMmumeModel } from '../../models/testMmumeModel';
import { testModel } from '../../models/testModel';

@IonicPage()
@Component({
  selector: 'page-mygarden-home',
  templateUrl: 'mygarden-home.html',
})
export class MygardenHomePage {

  public testMmumeModel = new testMmumeModel(-1,-1,'');
  public testModel = new testModel(-1,'',-1,'',-1,-1,'');
  public state: number = 0;

  constructor(
     public navCtrl: NavController
    ,public navParams: NavParams
    ,public mmumesService: MmumesService
    ,public testService: TestService) {
    this.testMmumeModel = this.testService.testMmumeModel;
    this.testModel = this.testService.testModel;
    this.state = this.testService.state;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MygardenHomePage');
    this.mmumesService.setMmumesList();
  }
  closeWindow() {
    this.navCtrl.pop();
  }
  test() {
    this.navCtrl.push('MygardenMmumePage');
  }
  test2() {
    this.navCtrl.push('TestPage');
  }
}
