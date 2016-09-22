import { Component, Output, EventEmitter, Input, HostListener } from '@angular/core';




@Component({
    moduleId: module.id,
    selector: 'bs-navbar',
    templateUrl: './navbar.html'
})
export class BsNavbar {
    bsNavbar: Navbar;

    @Output() openPanel = new EventEmitter();

    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        if (event.button == 2) {
            console.log('right click open setting menu');
            this.openPanel.emit({ type: BsNavbarPanel, bsNavbar: this.bsNavbar });
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
}
