import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';
import {WebsiteService} from 'core';




@Component({
    moduleId: module.id,
    selector: 'bs-navbar',
    templateUrl: './navbar.html'
})
export class BsNavbar {
    @Input() bsNavbar: Navbar = {
        type: 'navbar',
        menuList: [],
        styles: { backgroundColor: 'red', color: 'red' }
    };

    @Output() openPanel = new EventEmitter();

    constructor(){
      console.log(this.bsNavbar);
    }

    selectFile(){
      console.log('select file');
    }
    //右键禁用鼠标,弹出数据操作面板
    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        if (event.button == 2) {
            this.openPanel.emit({ type: BsNavbar, bsNavbar: this.bsNavbar });
            console.log('right click open setting menu');
        }
        event.preventDefault();
    }
}


/**
 * navbar 的设置面板
 */
@Component({
    moduleId: module.id,
    selector: 'bs-navbar-panel',
    templateUrl: './navbar-panel.html'
})
export class BsNavbarPanel {
    @Input() bsNavbar: Navbar;

    constructor(public websiteService:WebsiteService){}

    selectBackgroundImage(file){
        this.websiteService.upload(file);
    }
}
