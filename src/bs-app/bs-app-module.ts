import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MaterialModule} from '@angular2-material/all';

import { BS_APP_ROUTES } from './bs-app/routes';

import { Home, DemoApp } from './bs-app/bs-app';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        CommonModule,
        RouterModule.forRoot(BS_APP_ROUTES),
        MaterialModule.forRoot()
    ],
    declarations: [Home, DemoApp],
    entryComponents: [
        Home,
        DemoApp
    ]
})
export class BsAppModule {
    constructor(private appRef: ApplicationRef) {
    }

    ngDoBootstrap() {
        this.appRef.bootstrap(DemoApp);
    }

}
 