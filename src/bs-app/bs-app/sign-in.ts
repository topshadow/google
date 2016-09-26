import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, DocService } from 'core';
import { firebase } from 'core';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: './sign-in.html'
})
export class SignIn implements OnInit {
  username: string = '';
  password: string = '';
  autoSignIn: boolean = false;
  user: User;
  firebase: any;
  canRegister: boolean;
  registerMessage: string;
  repeatPasswordMessage: string;
  docs: Doc[] = [];
  doc: any = {};

  constructor(private router: Router,
    private userService: UserService,
    private docService: DocService) {
    this.user = { username: '', password: '', repeatPassword: '' };

  }

  ngOnInit() {
    var docsRef = firebase.database().ref('docs');
    docsRef.on('value', (snapshot) => { this.docs = this.objectToArray(snapshot.val()); });
  }

  objectToArray(obj: Object) {
    let result = new Array();
    Object.keys(obj).forEach((item, index, array) => {
      result[index] = obj[item];
    });
    console.log(result);
    return result;
  }

  checkUserExist() {

    this.userService.getUserByUsername(this.user.username, (rtn) => {
      if (rtn) {
        this.canRegister = false;
        this.registerMessage = '用户名已存在';
      } else {
        this.canRegister = true;
        this.registerMessage = '';
      }
    });
  }


  signIn() {
    this.userService.getUserByUsername(this.user.username, (user) => {
      if (user.password == this.user.password) {
        this.router.navigateByUrl('/page');
        this.user = user;
      } else {
        alert('用户名或者密码错误');
      }
    });


  }


  signUp() {
    if (this.canRegister && this.checkRepeatPassword()) {
      this.userService.addUser(this.user);
    }

  }

  checkRepeatPassword() {
    if (this.user.password != this.user.repeatPassword) {
      this.repeatPasswordMessage = '两次输入的密码不同';


      return false;
    }
    this.repeatPasswordMessage = '';
    return true;
  }

  addDoc() {
    this.docService.addDoc(this.doc);
  }
  deleteDoc(doc: Doc) {
    this.docs.splice(this.docs.indexOf(doc), 1);
    firebase.database().ref('docs').set(this.docs);
  }


}
