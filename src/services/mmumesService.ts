import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/* 서비스 선언 */
import { UsersSerivce } from '../services/usersSerivce';

@Injectable()
export class MmumesService {
  private firebaseURL = 'https://mmume-f390e.firebaseio.com';
  constructor(
    public usersService: UsersSerivce,
    public http: Http) {
  }
  setMmumesList () {
    console.log(this.usersService.userInfo);
  }
}
