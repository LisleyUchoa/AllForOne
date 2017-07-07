import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { User } from "../../models/user";
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public http: Http) {
  }

  saveUserInfo(user: User) {
    delete user.email;
    delete user.password;

    return firebase.database().ref('users').child(firebase.auth().currentUser.uid).set(user);
  }

}
