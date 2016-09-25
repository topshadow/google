import {Injectable} from '@angular/core';
/**
* 右侧面板内容
*/
export enum Panels {
    BsGridLayoutPanel = 0,
    BsListLayoutPanel = 1,
    BsNavbar = 2
}




var firebase =window['firebase'];


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRZod_Ur5T8K7V3kCV3rpRP9NjLGkQBAQ",
    authDomain: "topshadow-accda.firebaseapp.com",
    databaseURL: "https://topshadow-accda.firebaseio.com",
    storageBucket: "topshadow-accda.appspot.com",
    messagingSenderId: "1069236481103"
  };
  firebase.initializeApp(config);
  export {firebase};

@Injectable()
  export class Firebase {
    private firebase;
     public database():any{
      return this.firebase.database();
     }
     construtor(){
       this.firebase =window['firebase'];
     }

  }
