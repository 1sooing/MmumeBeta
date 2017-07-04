import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { userModel } from '../models/userModel';

@Injectable()
export class UsersSerivce {
  public userInfo:userModel = new userModel('','',false,'','',0,'',false,'','','');
  private firebaseURL = 'https://mmume-f390e.firebaseio.com';
  constructor(
    public http: Http) {
  }
  setUserInfo (userInfo : any): any {
    return this.http.get(this.firebaseURL + '/users/.json?orderBy="email"&equalTo="'+ userInfo.email +'"&print=pretty')
      .map( (data: Response) => data.json() )
      .subscribe(
        (data) => {
            Object.assign(this.userInfo, <userModel>data[Object.keys(data)[0]]);
        });
  }
  /* 삭제예정
  getUserInfo (userInfo : any): any {
    return this.http.get(this.firebaseURL + '/users/.json?orderBy="email"&equalTo="'+ userInfo.email +'"&print=pretty')
      .map( (data: Response) => data.json() );
  }
  */
}
