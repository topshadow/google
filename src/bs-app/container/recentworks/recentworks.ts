import { Component, HostListener, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';

@Component({
    moduleId: module.id,
    selector: 'recent-works',
    templateUrl: './recentworks.html',
    styleUrls: ['./recentworks.css']
})
export class RecentWorks {
    @Input() data;

    @HostListener('dblclick', ['$event'])
    showPanelOnDesktop() {
        this.showPanel();
    }

    @HostListener('touchstrat', ['$event'])
    showPanelOnMobile() {
        this.showPanel();
    }



    showPanel() {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    }

    deleteMe() {
        var page = this.websiteService.findPage(this.router.url);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);
    }


    constructor(private el: ElementRef,
        private router: Router,
        private websiteService: WebsiteService) { }

}
