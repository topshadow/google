import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// http://shapebootstrap.net/demo/html/corlate/

@Component({
    moduleId: module.id,
    selector: 'bs-carousel',
    templateUrl: './carousel.html',
    styleUrls: ['./carousel.css']
})
export class BsCarousel implements OnInit {
    public newSlider: Slider = {};
    @Input() data: Carousel = {
        content: {
            sliders: [{
                title1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                title2: 'Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...',
                lgImage: `http://shapebootstrap.net/demo/html/corlate/images/slider/bg1.jpg`,
                smImage: '//shapebootstrap.net/demo/html/corlate/images/slider/img1.png'
            },
            {
                title1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                title2: 'Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...',
                lgImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/bg2.jpg',
                smImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/img2.png'
            },
            {
                title1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
                title2: 'Accusantium doloremque laudantium totam rem aperiam, eaque ipsa...',
                lgImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/bg3.jpg',
                smImage: 'http://shapebootstrap.net/demo/html/corlate/images/slider/img3.png'
            }]
        }
    };

    constructor(public el: ElementRef, private security: DomSanitizer) {
        // this.data = this.data ? this.data : this.defaultData;
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

    uploadImage(data: { file: File, previewImage: HTMLImageElement }) {
        var url = window.URL.createObjectURL(data.file);
        data.previewImage.src = url;
    }

    addNewSlider(slider: Slider) {
        console.log(slider);
        this.data.content.sliders.push(slider);
    }

    de(result) {
        console.log(result);
    }
    upSlider(slider: Slider) {
        var index = this.data.content.sliders.indexOf(slider);
        var before = this.data.content.sliders[index - 1];
        this.data.content.sliders.splice(index - 1, 2, slider, before);

    }
    downSlider(slider: Slider) {
        var index = this.data.content.sliders.indexOf(slider);
        var after = this.data.content.sliders[index + 1];
        this.data.content.sliders.splice(index, 2, after, slider);
    }
    deleteSlider(slider: Slider) {
        var index = this.data.content.sliders.indexOf(slider);
        this.data.content.sliders.splice(index, 1);
    }

}

