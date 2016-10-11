import { Component,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'basic1-about-us-our-skill',
    templateUrl: './our-skill.html'
})
export class Basic1AboutUsOurSkill {
   @Input() data = {
        content: {
            title: 'Team of Corlate',
            subTitle: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore
                    magna aliqua. Ut enim ad minim veniam`,
            persons: [{
                name: 'JHON DOE',
                picture: 'http://shapebootstrap.net/demo/html/corlate/images/man1.jpg',
                goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                contactLinks: [],
                info: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
            },
            {
                name: 'JHON DOE',
                picture: 'http://shapebootstrap.net/demo/html/corlate/images/man2.jpg',
                goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                contactLinks: [],
                info: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
            }, {
                name: 'JHON DOE',
                picture: 'http://shapebootstrap.net/demo/html/corlate/images/man3.jpg',
                goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                contactLinks: [],
                info: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
            }, {
                name: 'JHON DOE',
                picture: 'http://shapebootstrap.net/demo/html/corlate/images/man2.jpg',
                goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                contactLinks: [],
                info: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
            ]
        }
    };
}
