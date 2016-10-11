import { Component, HostListener, ElementRef, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'our-skill',
    templateUrl: './our-skill.html'
})
export class OurSkill {
    $ = window['$'];
    @Input() data;

    constructor(private el: ElementRef) { }


    @HostListener('mousedown', ['$event'])
    showPanel(event: MouseEvent) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    }


}
