import {
    Component,
    OnInit,
    AfterViewInit,
    ViewContainerRef,
    Renderer,
    ElementRef
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


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
export class EveryPage implements OnInit {
    panels = Panels;
    page: Page;

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

    indexOf(el) {
        console.log(window['$']('md-tab-group').index(el));
    }
    savePage() {
        this.websiteService.userService.saveUser(this.websiteService.userService.user);
    }






    constructor(
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

        // 禁用鼠标右键
        document.oncontextmenu = () => { return false; };

        // 打开欢迎模态框
        window['$'](this.el.nativeElement).find('#welcomModal').modal('toggle');
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

