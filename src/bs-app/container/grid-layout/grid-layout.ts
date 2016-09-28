import {
    Component,
    Input,
    HostListener,
    ElementRef,
    Renderer,
    Output,
    EventEmitter
} from '@angular/core';

import { BsGridLayoutPanel } from './grid-layout-panel';


@Component({
    moduleId: module.id,
    selector: 'bs-grid-layout',
    templateUrl: './grid-layout.html'
})
export class BsGridLayout {
    @Input()
    public data: GridLayout;

    @Output() openPanel = new EventEmitter();


    set colsLength(length: number) {
        this.data.cols.length = isNaN(length) ? 2 : length;
    }

    get colsLength(): number {
        return this.data.cols.length;
    }

    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        // console.log(event);
        if (event.button == 2) {
            console.log('right click open setting menu');
            this.openPanel.emit({ type: BsGridLayoutPanel, gridLayout: this.data });
        }
        event.preventDefault();


    }



    constructor(private el: ElementRef, private render: Renderer) {
        // this.gridLayout.cols.
    }

    @HostListener('mouseenter', ['$event'])
    overBorder() {
        this.render.setElementStyle(
            this.el.nativeElement,
            'border', '2px solid blue');
    }

    @HostListener('mouseleave', ['$event'])
    noneBorder() {
        this.render.setElementStyle(
            this.el.nativeElement ,
            'border', 'none');
    }

}
