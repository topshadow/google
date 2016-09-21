import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.html'
})
export class SignIn {
    username: string = '';
    password: string = '';
    autoSignIn: boolean = false;

    constructor(private router: Router) { }

    signIn() {
        this.router.navigateByUrl('/page');
    }


}
