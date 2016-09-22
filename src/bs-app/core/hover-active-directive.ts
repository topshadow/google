import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';


@Directive({
    selector: '[hover-active]'
})
export class HoverActiveDirective {
    @Output() selectedActiveComponent = new EventEmitter();

    constructor(public el: ElementRef) { }

    @HostListener('mouseenter', ['$event'])
    select() {
        this.selectedActiveComponent.emit(this.el);
    }

}
