import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mygarden-home',
  templateUrl: 'mygarden-home.html',
})
export class MygardenHomePage {
  constructor(
     public navCtrl: NavController
    ,public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MygardenHomePage');
  }
  closeWindow() {
    this.navCtrl.pop();
  }
}
