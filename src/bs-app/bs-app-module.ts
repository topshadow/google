import { NgModule, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular2-material/all';

import { BS_APP_ROUTES } from './bs-app/routes';
import { Home, DemoApp } from './bs-app/bs-app';
import { SignIn, ChooseSignInWayDialog } from './bs-app/sign-in';
import { EveryPage, WelcomeDialog } from './bs-app/page';
import { ButtonPanel } from './panel/button-panel/button-panel';
import { BsButton } from './panel/button-panel/bs-button';
import { BsGridLayout } from './container/grid-layout/grid-layout';
import { BsGridLayoutPanel, ProductList, ProductDetail } from './container/index';

import { BsListLayout } from './container/list-layout/list-layout';
import { BsListLayoutPanel } from './container/list-layout/list-layout-panel';
import { BsNavbar, BsNavbarPanel, NavbarPublishPanel } from './container/navbar/navbar';
import { UserService, DocService, AutoInjectStyle, WebsiteService, PublishService } from 'core';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        RouterModule.forRoot(BS_APP_ROUTES),
        MaterialModule.forRoot(),
    ],
    declarations: [
        Home,
        DemoApp,
        SignIn,
        EveryPage,
        ButtonPanel,
        BsButton,
        WelcomeDialog,
        BsGridLayout,
        BsGridLayoutPanel,
        BsListLayout,
        BsListLayoutPanel,
        BsNavbar,
        BsNavbarPanel, AutoInjectStyle, ChooseSignInWayDialog,
        NavbarPublishPanel, ProductList, ProductDetail
    ],
    providers: [UserService, DocService, WebsiteService, PublishService],
    bootstrap: [DemoApp],
    entryComponents: [
        WelcomeDialog,
        ChooseSignInWayDialog,
        NavbarPublishPanel,
        EveryPage,
        BsGridLayout]
})
export class BsAppModule {
    constructor(private appRef: ApplicationRef,
        public resolver: ComponentFactoryResolver) { }

    ngDoBootstrap() {
        this.appRef.bootstrap(DemoApp);
    }

}
