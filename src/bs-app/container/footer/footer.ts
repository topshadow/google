import { Component, HostListener, ElementRef,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-footer',
    templateUrl: './footer.html'
})
export class Footer {
    @Input() data ;

    constructor(private el: ElementRef) { }

    @HostListener('mousedown', ['$event'])
    showPanel(event) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    }
}
