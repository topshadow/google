import { Directive, OnInit, Input, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
    selector: '[auto-inject-style]'
})
export class AutoInjectStyle implements OnInit {
    @Input('auto-inject-style') styles: Styles;


    constructor(private el: ElementRef, private render: Renderer) {

    }
    @HostBinding('style.color')
    get color(): string {
        return this.styles.color;
    }
    @HostBinding('style.backgroundColor')
    get backgroundColor() {
        return this.styles.backgroundColor;
    }

    @HostBinding('style.font-size')
    get fontSize(): string {
        return this.styles.fontSize + 'px';
    }





    ngOnInit() {
        console.log(this.styles);
        Object.keys(this.styles).forEach((item, index, array) => {
            this.render.setElementStyle(this.el.nativeElement, item, this.styles[item]);
        });
    }

}
