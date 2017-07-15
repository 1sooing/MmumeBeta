import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TestService {
  items: FirebaseListObservable<any[]>;
  constructor(
    public db: AngularFireDatabase
  ) {
    this.items = db.list('/mmmumesState');
  }
}
