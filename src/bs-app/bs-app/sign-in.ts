import { Component, OnInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { firebase, defaultWebsite, UserService, DocService, objectToArray } from 'core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular2-material/dialog';




@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: './sign-in.html'
})
export class SignIn implements OnInit, AfterViewInit {
  remeberMe: boolean = false;
  user: User;
  firebase: any;
  canRegister: boolean;
  registerMessage: string;
  repeatPasswordMessage: string;
  docs: Doc[] = [];
  doc: any = {};
  // 对话框
  dialogRef: MdDialogRef<ChooseSignInWayDialog>;

  constructor(private router: Router,
    private userService: UserService,
    private docService: DocService,
    private dialog: MdDialog,
    public viewContainerRef: ViewContainerRef
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

  ngAfterViewInit() {


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
        this.signDialog();
      } else {
        alert('用户名或者密码错误');
      }
    });
}

  signDialog() {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;
    this.dialogRef = this.dialog.open(ChooseSignInWayDialog, config);
    this.dialogRef.afterClosed().subscribe(() => {
      // this.lastCloseResult = result;
      this.dialogRef = null;
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


@Component({
  selector: 'choose-sign-in-way-dialog',
  template: `
  <button md-raised-button color="primary" (click)="mdDialogRef.close();editLogin();">编辑模式</button>
  <button md-raised-button color="accent">预览模式</button>
    `
})
export class ChooseSignInWayDialog {
  constructor(private mdDialogRef: MdDialogRef<ChooseSignInWayDialog>,
    private router: Router,
    private userService: UserService) { }

  // 编辑模式进入
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
