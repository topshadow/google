import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: `welcome to my build site `
})
export class Home {

}

@Component({
    moduleId: module.id,
    selector: 'demo-app',
    template: `<router-outlet></router-outlet>`
})
export class DemoApp {

}
