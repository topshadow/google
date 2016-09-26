import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[auto-inject-style]'
})
export class AutoInjectStyle implements OnInit {
    @Input('auto-inject-style') styles: Styles;


    constructor(private el: ElementRef, private render: Renderer) {

    }
    ngOnInit() {
        this.render.setElementStyle(this.el.nativeElement, 'color', this.styles.color);
    }

}
