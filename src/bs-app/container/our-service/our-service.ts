import { Component, HostListener, ElementRef, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'our-service',
    templateUrl: './our-service.html'
})
export class OurService {
    @Input() data;

    constructor(private el: ElementRef) { }

    @HostListener('dblclick', ['$event'])
    openPanelOnDesktop(event) {
        this.openPanel();
    }

    @HostListener('touchstart', ['$event'])
    openPanelOnMobile(event) {
        this.openPanel();
    }

    openPanel() {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    }

}
