import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';

// http://shapebootstrap.net/demo/html/corlate/

@Component({
    moduleId: module.id,
    selector: 'bs-carousel',
    templateUrl: './carousel.html',
    styleUrls: ['./carousel.css']
})
export class BsCarousel implements OnInit {
    public newSlider: Slider = {};
    @Input() data;

    @HostListener('dblclick', ['$event'])
    openPanelOnDesktop(event) {
        window['$'](this.el.nativeElement).find('.modal').modal('show');
    }

    @HostListener('touchstart', ['$event'])
    openPanelOnMobile(event) {
        window['$'](this.el.nativeElement).find('.modal').modal('show');
    }

    constructor(public el: ElementRef,
        private security: DomSanitizer,
        private websiteService: WebsiteService,
        private router: Router) { }

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

    deleteMe() {
        var page = this.websiteService.findPage(this.router.url);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);
    }
}

