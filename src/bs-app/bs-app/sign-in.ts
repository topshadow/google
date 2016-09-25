import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from 'core';


@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.html'
})
export class SignIn {
    username: string = '';
    password: string = '';
    autoSignIn: boolean = false;
    user:User;
    firebase:any;
    canRegister:boolean;
    registerMessage:string;
    repeatPasswordMessage:string;

    constructor(private router: Router,private userService:UserService) {
      this.user={username:'',password:'',repeatPassword:''};

    }

    checkUserExist(){

      this.userService.getUserByUsername(this.user.username,(rtn)=>{
        if(rtn){
        this.canRegister=false;
        this.registerMessage='用户名已存在'
      }else{
        this.canRegister=true;
        this.registerMessage='';
      }
    });
    }


    signIn() {
      this.userService.getUserByUsername(this.user.username,(user)=>{
        if(user.password==this.user.password){
          this.router.navigateByUrl('/page');
          this.user=user;
        }else{
          alert('用户名或者密码错误');
        }
      });


    }


    signUp(){
        if(this.canRegister&&this.checkRepeatPassword()){
            this.userService.addUser(this.user);
        }

    }

    checkRepeatPassword(){
    if(this.user.password!=this.user.repeatPassword){
        this.repeatPasswordMessage ='两次输入的密码不同';


      return false;
    }
    this.repeatPasswordMessage ='';
      return true;
  }

}
