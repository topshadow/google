import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { website, Website } from '../website';
import { MdSidenav } from '@angular2-material/sidenav';


/**
 * 将json解析成对应的页面组件,并挂载到当前页面,当从编辑模式进入该页面的时候,则可以按Ctrl键呼出左侧的菜单面板
 */
@Component({
    moduleId: module.id,
    selector: 'page',
    templateUrl: './page.html',
    styleUrls:['./page.css']

})
export class Page implements OnInit, AfterViewInit {
    website: Website;
    @ViewChild(MdSidenav) private leftSidePanel: MdSidenav;

    @HostListener('keydown', ['$event'])
    openLeftSidePanel(event: any) {
        console.log(event);
    }

    ngAfterViewInit() {

    }

    constructor() {
        this.website = website;
    }

    hello() {
        console.log('hello world');
    }



    ngOnInit() {
        document.addEventListener('keyup', (event) => {
            if (event.key == 'Control') {
                this.leftSidePanel.toggle();

            } else {
                return false;
            }
        }, false);
    }

}
