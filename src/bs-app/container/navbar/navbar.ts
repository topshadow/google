import {
    Component,
    Output,
    EventEmitter,
    OnInit,
    Input,
    HostListener,
    ViewContainerRef
} from '@angular/core';
import { WebsiteService, PublishService } from 'core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular2-material/dialog';



@Component({
    moduleId: module.id,
    selector: 'bs-navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.scss']
})
export class BsNavbar {
    @Input() bsNavbar: Navbar = {
        type: 'navbar',
        styles: { backgroundColor: 'red', color: 'red' }
    };

    @Output() openPanel = new EventEmitter();

    constructor() {
        console.log(this.bsNavbar);
    }

    selectFile() {
        console.log('select file');
    }
    // 右键禁用鼠标,弹出数据操作面板
    @HostListener('mousedown', ['$event'])
    openSettingMenu(event: MouseEvent) {
        if (event.button == 2) {
            this.openPanel.emit({ type: BsNavbar, bsNavbar: this.bsNavbar });
            // console.log('right click open setting menu');
        }
        event.preventDefault();
    }
}


/**
 * navbar 的设置面板
 */
@Component({
    moduleId: module.id,
    selector: 'bs-navbar-panel',
    templateUrl: './navbar-panel.html',
    styleUrls: ['./navbar.scss']
})
export class BsNavbarPanel {
    @Input() bsNavbar: Navbar;
    publishPanel: MdDialogRef<NavbarPublishPanel>;

    constructor(public websiteService: WebsiteService,
        public publishService: PublishService,
        public viewContainerRef: ViewContainerRef,
        public dialog: MdDialog) { }

    selectBackgroundImage(file) {
        this.websiteService.upload(file);
    }

    publishNavbar() {
        this.publishService.publishNavbar(this.bsNavbar, 'this is a navbar');
    }

    openNavbarPublishPanel() {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.publishPanel = this.dialog.open(NavbarPublishPanel, config);
        this.publishPanel.afterClosed().subscribe(() => {
            console.log('关闭发布面板');
        });
    }

    logStyle() {
        console.log(this.bsNavbar.styles);
    }
}


/**
 * 导航栏模板库
 */
@Component({
    moduleId: module.id,
    selector: 'navbar-publish-panel',
    templateUrl: `./navbar-publish-panel.html`
})
export class NavbarPublishPanel implements OnInit {
    navbars: Navbar[];
    constructor(
        public mdDialog: MdDialogRef<NavbarPublishPanel>,
        private publishService: PublishService) {
    }
    ngOnInit() {
        this.publishService.getNavbarList((navbarList) => {
            this.navbars = navbarList;
            console.log(this.navbars);
        });
    }


}
