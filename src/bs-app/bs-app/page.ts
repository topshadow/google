import {
    Component, OnInit,
    AfterViewInit, ViewContainerRef, Renderer, ElementRef
} from '@angular/core';
// import {Render} from '@angular/c';
import { website, Website } from '../website';
// import { BsGridLayout } from '../container/grid-layout/grid-layout';
import { BsGridLayoutPanel } from '../container/grid-layout/grid-layout-panel';
import { BsListLayoutPanel } from '../container/list-layout/list-layout-panel';
import { BsNavbarPanel } from '../container/navbar/navbar';

import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular2-material/dialog';

import { Panels } from '../core/index';


/**
 * 将json解析成对应的页面组件,并挂载到当前页面,当从编辑模式进入该页面的时候,则可以按Ctrl键呼出左侧的菜单面板
 */
@Component({
    moduleId: module.id,
    selector: 'page',
    templateUrl: './page.html',
    styleUrls: ['./page.css']

})
export class Page implements OnInit, AfterViewInit {
    website: Website;
    wellcomeDialogRef: MdDialogRef<WelcomeDialog>;
    lastCloseResult: string;

    selectedPanelIndex: number;
    selectedPanelData: any;

    // 活跃的组件,右键或左键可以打开控制面板,并且样式会处于激活状态,有边框
    activeComponent: any;
    gridLayout: GridLayout;
    private defaultGridLayout: GridLayout = {
        cols: [{ colspan: 1, component: '容器' }, { colspan: 2, component: '容器2' }]
    };


    ngAfterViewInit() {
        this.openWelcomeDialog();

    }

    openWelcomeDialog() {
        var config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.wellcomeDialogRef = this.dialog.open(WelcomeDialog, config);

    }

    constructor(public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef,
        public el: ElementRef
    ) {
        this.website = website;
        this.gridLayout = this.gridLayout ? this.gridLayout : this.defaultGridLayout;
    }

    openPanel(event: any) {
        console.log(event);
        switch (event.type) {
            case BsGridLayoutPanel:
                this.selectedPanelIndex = Panels.BsGridLayoutPanel;
                this.selectedPanelData = event.gridLayout;
                this.toggleRightPanel();
                break;
            case BsListLayoutPanel:
                this.selectedPanelIndex = Panels.BsListLayoutPanel;
                this.selectedPanelData = event.listLayout;
                this.toggleRightPanel();
                break;
            case BsNavbarPanel:
                this.selectedPanelIndex = Panels.BsNavbar;
                this.selectedPanelData = event.bsNavbar;
                this.toggleRightPanel();
                break;
        }
    }

    ngOnInit() {
        // 操作菜单
        document.addEventListener('keyup', (event: KeyboardEvent) => {
            console.log(event);
            switch (event.key) {
                case 'Control':
                    this.toggleLeftPanel();
                    break;
                case 'Alt':
                    this.toggleRightPanel();
                    break;
                default:
                    break;
            }
        }, false);

        document.oncontextmenu = () => { return false; };
        // 消除导航栏上方的空格性问题，否则右边的侧边栏的导航栏会很长
        this.el.nativeElement.querySelector('.md-tab-header').style.display = 'none';
    }

    toggleLeftPanel() {
        document.getElementById('start').click();
    }
    toggleRightPanel() {
        document.getElementById('rightPanelButton').click();
    }

}


@Component({
    moduleId: module.id,
    selector: 'wellcome-dialog',
    template: `<h1>欢迎来到旅游建站系统,使用Ctrl键,呼出控制面板,使用Alt管理查看当前页面数据 </h1>`
})
export class WelcomeDialog implements OnInit {
    constructor(public dialogRef: MdDialogRef<WelcomeDialog>,
        public render: Renderer,
        public el: ElementRef) { }

    ngOnInit() {
        this.render.setElementStyle(this.el.nativeElement, 'width', '800px');
    }

}


