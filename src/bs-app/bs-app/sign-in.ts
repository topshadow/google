import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { firebase, defaultWebsite, UserService, DocService, objectToArray } from 'core';




@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: './sign-in.html'
})
export class SignIn implements OnInit {
  remeberMe: boolean = false;
  user: User;
  firebase: any;
  canRegister: boolean;
  registerMessage: string;
  repeatPasswordMessage: string;
  docs: Doc[] = [];
  doc: any = {};
  // 对话框

  constructor(private router: Router,
    private userService: UserService,
    private docService: DocService,
    private el: ElementRef

  ) {
    this.user = { username: '', password: '', repeatPassword: '' };
  }

  ngOnInit() {
    this.user.username = localStorage.getItem('username') ? localStorage.getItem('username') : '';
    this.user.password = localStorage.getItem('password') ? localStorage.getItem('password') : '';
    this.remeberMe = localStorage.getItem('remeberMe') ? true : false;
    if (this.user.username && this.user.password && this.remeberMe) {
      this.signIn();
    };
    var docsRef = firebase.database().ref('docs');
    docsRef.on('value', (snapshot) => { this.docs = objectToArray(snapshot.val()); });
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
    this.userService.getUserByUsername(this.user.username, (serverUser: any) => {
      if (serverUser.password == this.user.password) {
        this.user = serverUser;
        this.userService.user = serverUser;
        // 用户没有数据则使用默认的网站数据
        this.userService.user.website = serverUser.website ? serverUser.website : defaultWebsite;
        if (this.remeberMe) {
          localStorage.setItem('username', serverUser.username);
          localStorage.setItem('password', serverUser.password);
          localStorage.setItem('remeberMe', 'true');
        }
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
      } else {
        alert('用户名或者密码错误');
      }
    });
  }

  signDialog() {

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

  editLogin() {
    window['isEdit'] = true;
    this.router.navigate(['index',
      {
        username: this.userService.user.username,
        password: this.userService.user.password,
        edit: true
      }]);
  }

  // 预览模式进入
  previewLogin() {
    window['isEdit'] = false;
    this.router.navigate(['index', {
      username: this.userService.user.username,
      password: this.userService.user.password,
      edit: false
    }]);
  }

}

