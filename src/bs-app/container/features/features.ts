import { Component, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';


@Component({
    moduleId: module.id,
    selector: 'bs-features',
    templateUrl: './features.html',
    styleUrls: ['./features.css']
})
export class BsFeatures implements OnInit {
    optionFeatureItems = ['fa fa-bullhorn', 'fa fa-comments',
        'fa fa-cloud-download', 'fa fa-leaf',
        'fa fa-cogs', 'fa fa-heart'];
    intervalId = 0;
    @Input() data: any;
    constructor(private el: ElementRef,
        private webService: WebsiteService,
        private router: Router) { }

    @HostListener('dblclick', ['$event'])
    openPanelOnDesktop() {
        this.openPanel();
    }

    @HostListener('touchstart', ['$event'])
    openPanelOnMobile() {
        this.openPanel();
    }

    ngOnInit() {
        var elHammer = new window['Hammer'](this.el.nativeElement);
        elHammer.on('pan', (ev) => {
            clearTimeout(this.intervalId);
            this.intervalId = window.setTimeout(() => {
                var page = this.webService.findPage(this.router.url);
                switch (ev.additionalEvent) {
                    case 'panup':
                        // var index = page.parts.indexOf(this.data);
                        // page.parts.splice(index - 1, 2, page.parts[index], page.parts[index - 1]);
                        break;
                }
            }, 300);

        });
    }
    openPanel() {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    }

    @HostListener('mousedown', ['$event'])
    showModal(event) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    }

    deleteMe() {
        var page = this.webService.findPage(this.router.url);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);

    }
}
