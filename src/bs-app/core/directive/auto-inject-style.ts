import { Directive, OnInit, Input, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
    selector: '[auto-inject-style]'
})
export class AutoInjectStyle implements OnInit {
    @Input('auto-inject-style') styles: Styles;


    constructor(private el: ElementRef, private render: Renderer) {

    }
    // @HostBinding('style.color')
    // get color(): string {
    //     return this.styles.color;
    // }
    // @HostBinding('style.backgroundColor')
    // get backgroundColor() {
    //     return this.styles.backgroundColor;
    // }

    // @HostBinding('style.font-size')
    // get fontSize(): string {
    //     return this.styles.fontSize + 'px';
    // }

    /**
     * 如果不是以url(开头,则补全
     */
    // @HostBinding('style.backgroundImage')
    // get backgroundImage() {
    //     return this.styles.backgroundImage =
    //         this.styles.backgroundImage.indexOf('url(') == -1
    //             ? 'url(' + this.backgroundImage + ')'
    //             : this.styles.backgroundImage;



    // }





    ngOnInit() {
        console.log(this.styles);
        Object.keys(this.styles).forEach((item, index, array) => {
            this.render.setElementStyle(this.el.nativeElement, item, this.styles[item]);
        });
    }

}
