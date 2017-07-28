import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/* model declaration */
import { testModel } from '../models/testModel';
import { testMmumeModel } from '../models/testMmumeModel';

@Injectable()
export class TestService {
  private firebaseURL = 'https://mmume-f390e.firebaseio.com';
  public testModel = new testModel(-1,'',-1,'',-1,-1,'');
  public testMmumeModel =  new testMmumeModel(-1,-1,'');
  public state: number = 0;

  constructor(
     public db: AngularFireDatabase
  ) {
    db.object( this.firebaseURL + '/mmumesState/test1234')
      .subscribe( (mmumesState) => {
        Object.assign(this.testModel, <testModel>mmumesState);

        if (this.testModel.waterLevel > 0 && this.testModel.waterLevel < 10) {
          this.testModel.waterStateMessage1 = "목말라요";
          this.testModel.waterStateMessage2 = "물이 너무 부족해요. 물 좀 주세요";
        }
        if (this.testModel.waterLevel >= 10 && this.testModel.waterLevel < 30) {
          this.testModel.waterStateMessage1 = "갈증나요";
          this.testModel.waterStateMessage2 = "뿌리가 적절하게 잠겼는지 확인해주세요.";
        }
        if (this.testModel.waterLevel >= 30 && this.testModel.waterLevel < 60) {
          this.testModel.waterStateMessage1 = "적당해요";
          this.testModel.waterStateMessage2 = "내 뿌리가 잘 잠겨있나요?";
        }
        if (this.testModel.waterLevel >= 60 && this.testModel.waterLevel < 80) {
          this.testModel.waterStateMessage1 = "최고예요";
          this.testModel.waterStateMessage2 = "수분감 최고! 충분충분";
        }
        if (this.testModel.waterLevel >= 80 && this.testModel.waterLevel <= 100) {
          this.testModel.waterStateMessage1 = "너무 배불러요";
          this.testModel.waterStateMessage2 = "물이 너무 많아요. 줄기가 썩을지도 몰라요";
        }
      });

    db.object( this.firebaseURL + '/testMmume')
      .subscribe( (testMmume) => {
        Object.assign(this.testMmumeModel, <testMmumeModel>testMmume)
        console.log(this.testMmumeModel);
      });
    this.getState();
  }

  getState() {
    this.state = 1;
  }
}
