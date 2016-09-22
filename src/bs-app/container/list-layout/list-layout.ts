import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { BsListLayoutPanel } from './list-layout-panel';

@Component({
    moduleId: module.id,
    selector: 'bs-list-layout',
    templateUrl: './list-layout.html'
})
export class BsListLayout {
    listLayout: any = {};
    @Output() openPanel = new EventEmitter();

    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        // 右键打开面板
        if (event.button == 2) {
            console.log('right click open setting menu');
            this.openPanel.emit({ type: BsListLayoutPanel, listLayout: this.listLayout });
        }
        event.preventDefault();


    }

}
