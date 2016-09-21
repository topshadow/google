import {
    Component, OnInit,
    AfterViewInit, ViewContainerRef
} from '@angular/core';
import { website, Website } from '../website';
import { MdSidenav } from '@angular2-material/sidenav';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular2-material/dialog';


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

    ngAfterViewInit() {
        this.openWelcomeDialog();

    }

    openWelcomeDialog() {
        var config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.wellcomeDialogRef = this.dialog.open(WelcomeDialog, config);

    }

    constructor(public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef) {
        this.website = website;
    }


    ngOnInit() {
        document.addEventListener('keyup', (event: KeyboardEvent) => {
            console.log(event);
            switch (event.key) {
                case 'Control':
                    document.getElementById('start').click();
                    break;
                case 'Alt':
                    document.getElementById('rightPanelButton').click();
                    break;
                default:
                    break;
            }

        }, false);
    }

    showRightPanel(panel: HTMLElement) {
        document.getElementsByClassName('right-panel').
    }

}


@Component({
    moduleId: module.id,
    selector: 'wellcome-dialog',
    template: `欢迎来到旅游建站系统,使用Ctrl键,呼出控制面板,使用Alt管理查看当前页面数据 `
})
export class WelcomeDialog {
    constructor(public dialogRef: MdDialogRef<WelcomeDialog>) { }

}


