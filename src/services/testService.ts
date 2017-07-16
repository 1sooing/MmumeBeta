import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/* model declaration */
//import { testModel } from '../models/testModel';

@Injectable()
export class TestService {
  private firebaseURL = 'https://mmume-f390e.firebaseio.com';

  public items: FirebaseListObservable<any[]>;
  //public testModel = new testModel(0,'',0,'',0,0,'');

  constructor(
     public db: AngularFireDatabase
  ) {
    this.items = db.list( this.firebaseURL + '/mmumesState');
  }
}
