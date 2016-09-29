import { Component, HostListener, ElementRef } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'bs-features',
    templateUrl: './features.html',
    styleUrls: ['./features.css']
})
export class BsFeatures {
    data: Features = {
        content: {
            title1: 'Features',
            title2: `Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
et dolore magna aliqua. Ut enim ad minim veniam`,
            featureItems: [{
                icon: 'fa fa-bullhorn',
                summary: 'Fresh and Clean',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            },
            {
                icon: 'fa fa-comments',
                summary: 'Retina ready',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            },
            {
                icon: 'fa fa-cloud-download',
                summary: 'Easy to customize',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            },
            {
                icon: 'fa fa-leaf',
                summary: 'Adipisicing elit',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            },
            {
                icon: 'fa fa-cogs',
                summary: 'Sed do eiusmod',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            },
            {
                icon: 'fa fa-heart',
                summary: 'Labore et dolore',
                detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            }
            ]
        }
    };
    constructor(private el: ElementRef) { }

    @HostListener('mousedown', ['$event'])
    showModal(event) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    }
}
