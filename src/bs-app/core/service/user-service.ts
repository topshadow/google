import { Injectable } from '@angular/core';
import { firebase } from 'core';

@Injectable()
export class UserService {
  private firebase;

  constructor() {
    this.firebase = firebase;
  }

  get user(): User {
    return window['user'];
  }

  set user(user: User) {
    window['user'] = user;
  }


  getUserByUsername(username: string, successMethod: (rtn) => void) {
    this.firebase.database().ref(`users/${username}`).once('value').then(snapshot => {
      successMethod(snapshot.val());
    });
  }
  addUser(user: User) {
    this.firebase.database().ref(`users/${user.username}`).set(user);
  }

  saveUser(user: User) {
    this.firebase.database().ref(`users/${user.username}`).set(user);
  }

}
