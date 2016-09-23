import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFire, FirebaseListObservable } from 'angularfire2/index';

@Component({
    moduleId: module.id,
    selector: 'sign-in',
    templateUrl: './sign-in.html'
})
export class SignIn {
    username: string = '';
    password: string = '';
    autoSignIn: boolean = false;
    users: any;

    constructor(private router: Router,
    // af: AngularFire
    ) {
        // this.users = af.database.list('/users');
        console.log('hello');
        // console.log(this.users);
        // this.users.push({ name: 'yangjie' });

    }

    signIn() {
        this.router.navigateByUrl('/page');
    }


}
