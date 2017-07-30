import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

import { TestService } from '../../services/testService';

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
  public state:number = 0;
  public menuColor:number = 0;
  public selectedCondition = 0;
  public baseWaterLevel:number = -80;
  public baseTempLevel:number = -80;
  public baseLightLevel:number = -80;

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,public db: AngularFireDatabase
    ,public testService: TestService) {
    this.menuGroups = ["뮴","상태","히스토리"];
    this.testModel = this.testService.testModel;

    /* 직접호출방법 not Serivce */
    /*
    db.object(this.firebaseURL + '/mmumesState/test1234')
      .subscribe( (mmumesState) => {
        Object.assign(this.testModel, <testModel>mmumesState)
        console.log(this.testModel);
      });
    */
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
    this.selectedCondition = 0;
    switch (this.slides.getActiveIndex()) {
      case 0:
        this.selectedItem = "뮴";
        this.menuColor = 0;
        break;
      case 1:
        this.selectedItem = "상태";
        this.menuColor = 1;
        break;
      case 2:
        this.selectedItem = "히스토리";
        this.menuColor = 2;
        break;
    }
  }
  getMyStyles() {
    let myStyles;
    switch (this.menuColor) {
      case 0:
        myStyles = {
          'background-color': ''
        };
        break;
      case 1:
        myStyles = {
          'background-color': '#e3fffe'
        };
        break;
      case 2:
        myStyles = {
          'background-color': '#DEEDC5'
        };
        break;
      case 3:
        myStyles = {
          'background-color': '#ffe3dc'
        };
        break;
      case 4:
        myStyles = {
          'background-color': '#ddd9ff'
        };
        break;
    }
    return myStyles;
  }
  changePageTemp() {
    this.selectedCondition = 1;
    this.menuColor = 3;
  }
  changePageWater() {
    this.selectedCondition = 0;
    this.menuColor = 1;
  }
  changePageLight() {
    this.selectedCondition = 2;
    this.menuColor = 4;
  }
  showMmumeMessage() {
    this.testService.testModel.mmumeStateMessage="저는 잘크고 있어요. 엄빠 :)";
  }
}
