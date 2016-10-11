import { Component, HostListener, ElementRef, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about-us',
    templateUrl: './about-us.html'
})
export class AboutUs {
    @Input() data;
    constructor(private el: ElementRef) { }

    @HostListener('mousedown', ['$event'])
    openPanel(event: MouseEvent) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    }
}
