import { Component, OnInit, ElementRef, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';

/**
 * 下拉选框选择页面
 */

@Component({
    moduleId: module.id,
    selector: 'theme-basic1-navbar',
    templateUrl: './navbar.html'
})
export class Navbar implements OnInit {
    public newPage: any = { pageName: '', path: '' };
    @Input() data;
    pages: Page[];
    constructor(public el: ElementRef, private websiteService: WebsiteService,
        private router: Router) { }

    // 移动端按住就会显示
    @HostListener('touchstart', ['$event'])
    showPanelOnMobile() {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    }

    // 桌面端
    @HostListener('dblclick', ['$event'])
    showPanelOnDesktop() {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    }


    ngOnInit() {
        this.pages = this.websiteService.userService.user.website.pages;
        var Hammer = window['Hammer'];
        var elHammer = new Hammer(this.el.nativeElement, {
            recognizers: [
                // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
                [Hammer.Tap],
                [Hammer.Rotate],
                [Hammer.Pinch, { enable: false }, ['rotate']],
                [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }],
            ]
        });
        elHammer.on('tap', (ev) => {
            console.log(ev);
            // if(ev.add)
        });
    }



    addPage(page: { parts: Part[], path: string, pageName: string }) {
        this.websiteService.userService.user.website.pages
            .push(page);
    }

    navigate(path) {
        this.router.navigate([path]);
    }

    deleteMe() {
        var page = this.websiteService.findPage(this.router.url);
        console.log(this.router.url, page);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);
    }
}
