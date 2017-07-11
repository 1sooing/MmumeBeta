import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MygardenMmumePage');
  }
  closeWindow() {
    this.navCtrl.pop();
  }
  loadMmume(event) {
    event.target.classList.add('gd-mmume-menu-focus');
    this.slides.slideTo(0, 500, true);
  }
  loadCondition(event) {
    event.target.classList.add('gd-mmume-menu-focus');
    this.slides.slideTo(1, 500, true);
  }
  loadHistory(event) {
    event.target.classList.add('gd-mmume-menu-focus');
    this.slides.slideTo(2, 500, true);
  }
}
