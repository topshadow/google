import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    selector: 'bs-carousel',
    templateUrl: './carousel.html',
    styleUrls: ['./carousel.css']
})
export class BsCarousel implements OnInit {
    @Input() data: Carousel;
    defaultData: Carousel = {
        content: {

            sliders: [{
                title1: '标题1', title2: '标题2',
                lgImage: '//shapebootstrap.net/demo/html/corlate/images/slider/bg1.jpg)',
                smImage: '//shapebootstrap.net/demo/html/corlate/images/slider/img1.png'
            },
            {
                title1: '第二组标题1', title2: '第二组标题2',

                lgImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/bg2.jpg)',
                smImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/img2.png'
            },
            {
                title1: '第二组标题1', title2: '第二组标题2',
                lgImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/bg3.jpg',
                smImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/img3.png'
            }]
        }
    };

    constructor(public el: ElementRef, private security: DomSanitizer) {
        this.data = this.data ? this.data : this.defaultData;
        this.data.content.sliders.forEach(
            (item, index, array) => {
                item.lgImage = security.bypassSecurityTrustResourceUrl(item.lgImage);
            });
    }
    ngOnInit() {
        window['$'](this.el.nativeElement).find('#carouselModal').carousel({ interval: 4000 });
    }

    @HostListener('mousedown', ['$event'])
    showModal(event) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    }

}

