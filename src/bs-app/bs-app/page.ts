import {
    Component,
    OnInit,
    AfterViewInit,
    ViewContainerRef,
    Renderer,
    ElementRef
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



import {
    BsNavbar,
    BsGridLayoutPanel,
    BsListLayoutPanel,
    BsProductList
} from 'container';

import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular2-material/dialog';

import { Panels, WebsiteService, defaultNavbar } from 'core';


/**
 * 将json解析成对应的页面组件,并挂载到当前页面,当从编辑模式进入该页面的时候,则可以按Ctrl键呼出左侧的菜单面板
 */
@Component({
    moduleId: module.id,
    selector: 'page',
    templateUrl: './page.html',
    styleUrls: ['./page.css']

})
export class EveryPage implements OnInit, AfterViewInit {
    panels = Panels;
    page: Page;
    wellcomeDialogRef: MdDialogRef<WelcomeDialog>;
    selectedData: any;
    selectedIndex: number;

    // 活跃的组件,右键或左键可以打开控制面板,并且样式会处于激活状态,有边框
    activeComponent: any;
    gridLayout: GridLayout;
    private defaultGridLayout: GridLayout = {
        cols: [{ colspan: 1, component: '容器' }, { colspan: 2, component: '容器2' }]
    };

    addNavbar() {
        this.websiteService.addPart(this.page.path, defaultNavbar);
    }

    savePage() {
        this.websiteService.userService.saveUser(this.websiteService.userService.user);
    }


    ngAfterViewInit() {
        setTimeout(this.openWelcomeDialog(), 5000);
    }

    openWelcomeDialog() {
        var config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.wellcomeDialogRef = this.dialog.open(WelcomeDialog, config);
    }

    constructor(public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef,
        public el: ElementRef,
        public websiteService: WebsiteService,
        public route: ActivatedRoute
    ) {
        this.route.params.forEach((params: Params) => {
            var path = params['path'];
            this.page = this.websiteService.findPage(path);
            console.log(`当前页面是${path},数据是${JSON.stringify(this.page)}`);
        });
        this.gridLayout = this.gridLayout ? this.gridLayout : this.defaultGridLayout;
    }

    openPanel(event: any) {
        console.log(event);
        this.selectedData = event.data;
        this.selectedIndex = event.selectedIndex;
        this.toggleRightPanel();
    }

    ngOnInit() {
        // 操作菜单
        document.addEventListener('keyup', (event: KeyboardEvent) => {
            switch (event.code) {
                case 'ControlLeft':
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
