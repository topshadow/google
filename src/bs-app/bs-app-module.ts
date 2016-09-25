import { NgModule, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular2-material/all';

import { BS_APP_ROUTES } from './bs-app/routes';
import { Home, DemoApp } from './bs-app/bs-app';
import { SignIn } from './bs-app/sign-in';
import { Page, WelcomeDialog } from './bs-app/page';
import { ButtonPanel } from './panel/button-panel/button-panel';
import { BsButton } from './panel/button-panel/bs-button';
import { BsGridLayout } from './container/grid-layout/grid-layout';
import { BsGridLayoutPanel } from './container/grid-layout/grid-layout-panel';

import { BsListLayout } from './container/list-layout/list-layout';
import { BsListLayoutPanel } from './container/list-layout/list-layout-panel';
import { BsNavbar, BsNavbarPanel } from './container/navbar/navbar';
import {UserService } from 'core';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        RouterModule.forRoot(BS_APP_ROUTES),
        MaterialModule.forRoot(),
        // AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        Home,
        DemoApp,
        SignIn,
        Page,
        ButtonPanel,
        BsButton,
        WelcomeDialog,
        BsGridLayout,
        BsGridLayoutPanel,
        BsListLayout,
        BsListLayoutPanel,
        BsNavbar,
        BsNavbarPanel
    ],
    providers:[UserService],
    bootstrap: [DemoApp],
    entryComponents: [WelcomeDialog, Page, BsGridLayout]
})
export class BsAppModule {
    constructor(private appRef: ApplicationRef,
        public resolver: ComponentFactoryResolver
        // af: AngularFire
    ) {
        // console.log(af);
    }

    ngDoBootstrap() {
        this.appRef.bootstrap(DemoApp);
    }

}
