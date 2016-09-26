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
    public gridLayout: GridLayout;

    @Output() openPanel = new EventEmitter();


    set colsLength(length: number) {
        this.gridLayout.cols.length = isNaN(length) ? 2 : length;
    }

    get colsLength(): number {
        return this.gridLayout.cols.length;
    }

    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        // console.log(event);
        if (event.button == 2) {
            console.log('right click open setting menu');
            this.openPanel.emit({ type: BsGridLayoutPanel, gridLayout: this.gridLayout });
        }
        event.preventDefault();


    }



    constructor(private el: ElementRef, private render: Renderer) {
        // this.gridLayout.cols.
    }

    @HostListener('mouseenter', ['$evnet'])
    overBorder() {
        this.render.setElementStyle(
            this.el.nativeElement.querySelector('md-grid-list'),
            'border', '2px solid blue');
    }

    @HostListener('mouseleave', ['$evnet'])
    noneBorder() {
        this.render.setElementStyle(
            this.el.nativeElement.querySelector('md-grid-list'),
            'border', 'none');
    }

}