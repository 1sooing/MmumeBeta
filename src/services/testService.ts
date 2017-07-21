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
        Object.assign(this.testModel, <testModel>mmumesState)
        console.log(this.testModel);
      });

    db.object( this.firebaseURL + '/testMmume')
      .subscribe( (testMmume) => {
        Object.assign(this.testMmumeModel, <testMmumeModel>testMmume)
        console.log(this.testMmumeModel);
      });

    this.getState();
  }

  getState() {
    this.state = 5;
  }
}
