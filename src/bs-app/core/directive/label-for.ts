import { Directive, Input, ElementRef, HostListener } from '@angular/core';


/**
 * 链接点击元素
 */
@Directive({
    selector: '[label-for]'
})
export class LabelForDirective {
    @Input('label-for') element;

    constructor(private el: ElementRef) { }

    @HostListener('click', ['$event'])
    labelFor() {
        this.element.click();
    }
}
