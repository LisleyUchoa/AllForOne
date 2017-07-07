import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
import { User } from "../../models/user";
import { DatabaseProvider } from "../database/database";

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor(public http: Http,
              private databaseProvider: DatabaseProvider) {

  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    return firebase.auth().signOut();
  }

  signup(user: User) {
    let promise = new Promise((resolve, reject) => {
       firebase.auth().createUserWithEmailAndPassword(user.email.trim(), user.password).then(() => {
          this.databaseProvider.saveUserInfo(user).then(() => {
            resolve();
          }).catch(error => {
            reject(error);
          });
      }).catch(error => {
        reject(error);
      });
    });

    return promise;
  }

}
