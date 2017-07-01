import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Http, Response, Headers } from "@angular/http";
//import firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { userModel } from '../models/userModel';

@Injectable()
export class AuthService {
  private firebaseURL = 'https://mmume-f390e.firebaseio.com';
  constructor(
    public afAuth: AngularFireAuth
   ,public http: Http) {
  }
  doSignup( userInfo : any ) : any {
    let localDate = new Date().toLocaleDateString();
    return this.afAuth.auth.createUserWithEmailAndPassword( userInfo.email, userInfo.password )
      .then( (user) => {
        user.sendEmailVerification();
        const body = JSON.stringify(new userModel(user.email, user.uid, false, '', '', 0, userInfo.userName, false, localDate.toString(), '',localDate.toString()));
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.firebaseURL + '/users.json', body, {headers: headers})
          .map( (data: Response) => data.json() )
          .subscribe(
            data => {}
          );
      })
      .catch( (error) => {
        console.log(error);
        throw error;
      });
  }
  doLogin( userInfo: any ): any {
    return new Promise( (resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then( (userInfo) => {
          if(userInfo.emailVerified) {
            resolve(true);
          } else {
            resolve('1001');
            //throw (new Object( {code: "auth/no-verification", message: "Did not yet verified E-mail"}));
          }
        })
        .catch( (error) => {
          reject(error);
        });
    })
  }
  doLogout(): any {
    return this.afAuth.auth.signOut();
  }
  getUserInfo (userInfo : any): any {
    console.log(userInfo.email);
    return this.http.get(this.firebaseURL + '/users/.json?orderBy="email"&equalTo="'+ userInfo.email +'"&print=pretty')
      .map( (data: Response) => data.json() )
  }
}
