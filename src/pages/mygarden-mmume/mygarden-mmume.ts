import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { TestService } from '../../services/testService';
/**
 * Generated class for the MygardenMmumePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mygarden-mmume',
  templateUrl: 'mygarden-mmume.html',
})
export class MygardenMmumePage {
  @ViewChild(Slides) slides: Slides;
  menuGroups: string[];
  selectedItem: string = "뮴";
  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,public testService: TestService) {
    this.menuGroups = ["뮴","상태","히스토리"];
    console.log(this.testService.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MygardenMmumePage');
  }
  closeWindow() {
    this.navCtrl.pop();
  }
  clickMenu(event: any, item, index) {
    event.preventDefault();
    this.selectedItem = item;
    this.slides.slideTo(index, 500, true);
  }
  slideChanged() {
    switch (this.slides.getActiveIndex()) {
      case 0:
        this.selectedItem = "뮴";
        break;
      case 1:
        this.selectedItem = "상태";
        break;
      case 2:
        this.selectedItem = "히스토리";
        break;
    }
  }
}
