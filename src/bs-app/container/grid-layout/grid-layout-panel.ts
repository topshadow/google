import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-grid-layout-panel',
    templateUrl: './grid-layout-panel.html'
})
export class BsGridLayoutPanel {
    @Input() gridLayout: GridLayout;

    private defaultGridLayout: GridLayout = {
        cols: [{ colspan: 1, component: '容器' }, { colspan: 2, component: '容器2' }]
    };

    constructor() {
        // if (!this.gridLayout) { this.gridLayout = this.defaultGridLayout; }
        this.gridLayout = this.gridLayout ? this.gridLayout : this.defaultGridLayout;
    }

    // 进行数据检查
    set colsLength(length: number) {

        this.gridLayout.cols.length = isNaN(length) ? 1 : length;

    }
    hello() {
        console.log('hello world');
    }

    openPanel(event: any) {
        console.log(event);
        return true;
    }
}
