import { Injectable } from '@angular/core';
/**
* 右侧面板内容
*/
export enum Panels {
  BsGridLayoutPanel = 0,
  BsListLayoutPanel = 1,
  BsNavbar = 2,
  BsProductList = 3
}




var firebase = window['firebase'];


// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDRZod_Ur5T8K7V3kCV3rpRP9NjLGkQBAQ',
  authDomain: 'topshadow-accda.firebaseapp.com',
  databaseURL: 'https://topshadow-accda.firebaseio.com',
  storageBucket: 'topshadow-accda.appspot.com',
  messagingSenderId: '1069236481103'
};
firebase.initializeApp(config);
export { firebase };

@Injectable()
export class Firebase {
  private firebase;
  public database(): any {
    return this.firebase.database();
  }
  construtor() {
    this.firebase = window['firebase'];
  }

}

export class User {
  password: string;
  username: string;

  constructor() {
    window['user'] = {};
  }

  get website() {
    return window['user'].website;
  }
  set website(website: Website) {
    window['user'].website = website;
  }
}

export class Data {
  get user() {
    return window['user'];
  }

  set user(user: User) {
    window['user'] = user;
  }

}


export var user = new User();

export var defaultWebsite: Website = {
  pages: [{
    path: 'index',
    parts: [
      {
        type: 'navbar'
      }
    ]
  }]
};

/**
 * 对象转数组,可以放入core库中
 */
export function objectToArray(obj: Object) {
  let result = new Array();
  Object.keys(obj).forEach((item, index, array) => {
    result[index] = obj[item];
  });
  return result;
}
