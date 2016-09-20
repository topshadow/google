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
    template: `welecome hehe
     <button md-fab> this is a button 
        </button>
        `
})
export class DemoApp {

}
