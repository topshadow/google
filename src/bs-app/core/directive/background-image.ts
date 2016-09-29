import { Directive, Input, OnInit, ElementRef, Renderer, HostBinding } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Directive({
    selector: '[background-image]',
})
export class BackgroundImageDirective implements OnInit {
    @Input('background-image') backgroundImage: string;
    constructor(private el: ElementRef,
        private render: Renderer,
        public dom: DomSanitizer) {

    }

    @HostBinding('style.backgroundImage')
    get image(): any {
        return this.dom.bypassSecurityTrustStyle(this.backgroundImage);

    }
    ngOnInit() {
        // this.render.setElementStyle(
        //     this.el.nativeElement,
        //     'backgroundImage',
        //     this.backgroundImage);
        // window['$'](this.el.nativeElement).css('background-image', this.backgroundImage);
        console.log(this.backgroundImage);

    }


}
