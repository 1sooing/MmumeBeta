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

  constructor(
      public db: AngularFireDatabase
  ) {
    db.object( this.firebaseURL + '/mmumesState/test1234')
      .subscribe( (mmumesState) => {
        Object.assign(this.testModel, <testModel>mmumesState);

        /***** 수위 센서 ******/
        /***** DRY ******/
        if (this.testModel.waterLevel > 0 && this.testModel.waterLevel < 4) {
          this.testModel.waterStateMessage1 = "목말라요";
          this.testModel.waterStateMessage2 = "물이 너무 부족해요. 물 좀 주세요";
          this.testModel.waterLevelState = -1;
        }
        /***** GOOD ******/
        if (this.testModel.waterLevel >= 4 && this.testModel.waterLevel < 8) {
          this.testModel.waterStateMessage1 = "갈증나요";
          this.testModel.waterStateMessage2 = "뿌리가 적절하게 잠겼는지 확인해주세요.";
          this.testModel.waterLevelState = 1;
        }
        /***** GOOD ******/
        if (this.testModel.waterLevel >= 8 && this.testModel.waterLevel < 12) {
          this.testModel.waterStateMessage1 = "적당해요";
          this.testModel.waterStateMessage2 = "내 뿌리가 잘 잠겨있나요?";
          this.testModel.waterLevelState = 1;
        }
        /***** GOOD ******/
        if (this.testModel.waterLevel >= 12 && this.testModel.waterLevel < 16) {
          this.testModel.waterStateMessage1 = "최고예요";
          this.testModel.waterStateMessage2 = "수분감 최고! 충분충분";
          this.testModel.waterLevelState = 1;
        }
        /***** GOOD ******/
        if (this.testModel.waterLevel >= 16 && this.testModel.waterLevel <= 17) {
          this.testModel.waterStateMessage1 = "너무 배불러요";
          this.testModel.waterStateMessage2 = "물이 너무 많아요. 줄기가 썩을지도 몰라요";
          this.testModel.waterLevelState = 1;
        }
        /***** 수위 센서 ******/

        /***** 온도 센서 ******/
        /***** COLD ******/
        if (this.testModel.temperature > 0 && this.testModel.temperature <= 10) {
          this.testModel.temperatureStateMessage1 = "추워요";
          this.testModel.temperatureStateMessage2 = "엣취! 오들오들 떨고 있어요.";
          this.testModel.temperatureState = -1;
        }

        /***** NORMAL ******/
        if (this.testModel.temperature > 10 && this.testModel.temperature <= 16) {
          this.testModel.temperatureStateMessage1 = "쌀쌀해요";
          this.testModel.temperatureStateMessage2 = "저를 따듯하게 안아주세요.";
          this.testModel.temperatureState = 1;
        }
        if (this.testModel.temperature > 25 && this.testModel.temperature <= 33) {
          this.testModel.temperatureStateMessage1 = "살짝 덥네요";
          this.testModel.temperatureStateMessage2 = "혹시, 주인님도 좀 덥지 않아요?";
          this.testModel.temperatureState = 1;
        }

        /***** BEST ******/
        if (this.testModel.temperature > 16 && this.testModel.temperature <= 24) {
          this.testModel.temperatureStateMessage1 = "딱 좋아요.";
          this.testModel.temperatureStateMessage2 = "따듯 따듯 :-)";
          this.testModel.temperatureState = 1;
        }

        /***** HOT ******/
        if (this.testModel.temperature > 33 && this.testModel.temperature <= 50) {
          this.testModel.temperatureStateMessage1 = "너무 더워요.";
          this.testModel.temperatureStateMessage2 = "몸이 타들어 갈 거 같아요.";
          this.testModel.temperatureState = 2;
        }
        /***** 온도 센서 ******/

        /***** 조도 센서 ******/
        if (this.testModel.illumination > 0 && this.testModel.illumination <= 300) {
          this.testModel.illuminationStateMessage1 = "무서워요.";
          this.testModel.illuminationStateMessage2 = "밝은데로 가고 싶어요.";
          this.testModel.illuminationState = -1;
        }
        if (this.testModel.illumination > 300 && this.testModel.illumination <= 900) {
          this.testModel.illuminationStateMessage1 = "좋아요.";
          this.testModel.illuminationStateMessage2 = "활동 하기 좋은 날이네요.";
          this.testModel.illuminationState = 1;
        }
        if (this.testModel.illumination > 900 && this.testModel.illumination <= 1024) {
          this.testModel.illuminationStateMessage1 = "너무 밝아요.";
          this.testModel.illuminationStateMessage2 = "눈이 부시네요. *.*";
          this.testModel.illuminationState = 1;
        }
        /***** 조도 센서 ******/

        /***** 뮴 상태 체크 로직 ******/
        /***** 뮴 상태 체크 로직 ******/
        //console.log(this.testModel);
      });

    db.object( this.firebaseURL + '/testMmume')
      .subscribe( (testMmume) => {
        Object.assign(this.testMmumeModel, <testMmumeModel>testMmume)
        console.log(this.testMmumeModel);
      });
  }
}
