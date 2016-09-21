import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-grid-layout-panel',
    templateUrl: './grid-layout-panel.html'
})
export class BsGridLayoutPanel {
    @Input()
    gridLayout: GridLayout;

    private defaultGridLayout: GridLayout = {
        cols: 4
    };

    constructor() {
        if (!this.gridLayout) { this.gridLayout = this.defaultGridLayout; }
    }

}
