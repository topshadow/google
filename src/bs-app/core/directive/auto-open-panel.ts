import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';


/**
 * 自动打开操作面板
 */
@Directive({
    selector: '[auto-open-panel]'
})
export class AutoOpenPanel {
    @Input('auto-open-panel') panel: { editPanel: any, selectedIndex: number, data: any };
    @Output('openPanel') openPanel = new EventEmitter();
    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        if (event.button == 2) {
            this.openPanel.emit(this.panel);
        }
        event.preventDefault();
    }

}
