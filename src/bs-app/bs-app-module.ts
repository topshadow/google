import { NgModule, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular2-material/all';

import { BS_APP_ROUTES } from './bs-app/routes';
import { Home, DemoApp } from './bs-app/bs-app';
import { SignIn } from './bs-app/sign-in';
import { EveryPage } from './bs-app/page';
import { ButtonPanel } from './panel/button-panel/button-panel';
import { BsButton } from './panel/button-panel/bs-button';

import {
    BsNavbar,
    BsNavbarPanel,
    NavbarPublishPanel,
    BsCarousel,
    BsFeatures
} from 'container';
import {
    UserService,
    DocService,
    AutoInjectStyle,
    WebsiteService,
    PublishService,
    AutoOpenPanel,
    PassSafeResouceUrlPipe,
    BackgroundImageDirective,
    LabelForDirective
} from 'core';


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
        BsNavbar,
        BsNavbarPanel,
        AutoInjectStyle,
        NavbarPublishPanel,
        AutoOpenPanel, BsCarousel,
        PassSafeResouceUrlPipe,
        BackgroundImageDirective,
        LabelForDirective,
        BsFeatures
    ],
    providers: [UserService, DocService, WebsiteService, PublishService],
    bootstrap: [DemoApp],
    entryComponents: [
        NavbarPublishPanel,
        BsCarousel,
        EveryPage]
})
export class BsAppModule {
    constructor(private appRef: ApplicationRef,
        public resolver: ComponentFactoryResolver) { }

    ngDoBootstrap() {
        this.appRef.bootstrap(DemoApp);
    }

}
