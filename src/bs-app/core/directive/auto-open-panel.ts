import { Directive, HostListener,Input, Output, EventEmitter } from '@angular/core';


/**
 * 自动打开操作面板
 */
@Directive({
    selector: '[auto-open-panel]'
})
export class AutoOpenPanel {
    @Input('auto-open-panel') emitData;
    @Output() openPanel = new EventEmitter();

    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        if (event.button == 2) {
            this.openPanel.emit({ type: this.emitData.Panel, data: this.emitData.data });
            console.log(this.emitData);
        }
        event.preventDefault();
    }
}
