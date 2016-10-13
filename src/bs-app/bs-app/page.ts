import {
    Component,
    OnInit,
    QueryList,
    ViewChildren,
    ElementRef,
    AfterViewInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MdSidenav } from '@angular2-material/sidenav';

import { Panels, WebsiteService, defaultNavbar } from 'core';
import { firebase } from 'core';

import { themes } from './themes';

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
    path: string;
    themes = themes;
    user;

    // 两侧边栏
    @ViewChildren(MdSidenav) sidenavs: QueryList<MdSidenav>;
    leftSidenav: MdSidenav;
    rightSidenav: MdSidenav;
    ngAfterViewInit() {
        this.leftSidenav = this.sidenavs.first;
        this.rightSidenav = this.sidenavs.last;
    }



    addNavbar() {
        this.websiteService.addPart(this.page.path, defaultNavbar);
    }

    savePage() {
        this.websiteService.userService.saveUser(this.websiteService.userService.user);
    }

    constructor(
        public el: ElementRef,
        public websiteService: WebsiteService,
        public route: ActivatedRoute
    ) {
      this.reloadParts();
        this.user = this.websiteService.userService.user;
        console.log('网站数据', this.websiteService.userService.user.website);
    }

    fullScreen() {
        // 若要全屏页面中div，var element= document.getElementById("divID");
        var el = document.documentElement;
        // 切换全屏
        var rfs = el['requestFullScreen'] ||
            el['webkitRequestFullScreen'] ||
            el['mozRequestFullScreen'] || el['msRequestFullscreen'];
        if (typeof rfs != 'undefined' && rfs) {
            rfs.call(el);
        } else if (typeof window['ActiveXObject'] != 'undefined') {
            // for Internet Explorer 
            var wscript = new window['ActiveXObject']('WScript.Shell');
            if (wscript != null) {
                wscript.SendKeys('{F11}');
            }
        }
    }

    ngOnInit() {
        // 打开欢迎模态框
        window['$'](this.el.nativeElement).find('#welcomeModal').modal('toggle');
        // 消除导航栏上方的空格性问题，否则右边的侧边栏的导航栏会很长
        // 滑动显示左侧边栏
        var Hammer = window['Hammer'];
        var bodyHammer = new Hammer(window['$']('body')[0], {
            recognizers: [
                // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
                [Hammer.Pan],
                [Hammer.Rotate],
                [Hammer.Pinch, { enable: false }, ['rotate']],
                [Hammer.Swipe, { direction: Hammer.DIRECTION_LEFT }],
            ]
        });
        // 打开左右两侧的侧边栏
        bodyHammer.on('pan', (ev) => {
            switch (ev.additionalEvent) {
                case 'panright':
                    if (this.rightSidenav._isOpened) {
                        this.rightSidenav.close();
                        return;
                    }
                    this.leftSidenav.open();
                    break;
                case 'panleft':
                    if (this.leftSidenav._isOpened) {
                        this.leftSidenav.close();
                        return;
                    }
                    this.rightSidenav.open();
                    break;
            }
        });
    }

    addPart(part) {
        this.websiteService.addPart(this.path, part);
    }

    clearWebsite() {
        this.websiteService.clearWebsite();
    }

    publish() {
        firebase.database().ref('publish').push(this.websiteService.userService.user.website);
    }

    reloadParts() {
          this.route.params.forEach((params: Params) => {
            this.path = params['path'];
            this.page = this.websiteService.findPage(this.path);
            console.log(`当前页面是${this.path},数据是
            ${JSON.stringify(this.websiteService.userService.user.website)}`);
        });
    }
}

