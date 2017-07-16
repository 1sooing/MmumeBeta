import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

import { testModel } from '../../models/testModel';
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
  private firebaseURL = 'https://mmume-f390e.firebaseio.com';
  menuGroups: string[];
  selectedItem: string = "뮴";
  public testModel = new testModel(-1,'',-1,'',-1,-1,'');

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,public db: AngularFireDatabase) {
    this.menuGroups = ["뮴","상태","히스토리"];
    db.object(this.firebaseURL + '/mmumesState/test1234')
      .subscribe( (mmumesState) => {
        Object.assign(this.testModel, <testModel>mmumesState)
        console.log(this.testModel);
      });
    /* 리스트 방식 & http get */
    //this.items = db.list(this.firebaseURL + '/mmumesState');
    /*
    this.http.get(this.firebaseURL + '/mmumesState/.json')
      .map( (data: Response) => data.json() )
      .subscribe( (data) => {console.log(data)})
    */
    /* 리스트 방식 & http get */
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
