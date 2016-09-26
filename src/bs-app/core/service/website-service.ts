import { Injectable } from '@angular/core';
import { firebase, UserService } from 'core';

export var defaultNavbar: Navbar = {
    type: 'navbar'
};


@Injectable()
export class WebsiteService {
    firebase: any = firebase;
    public userService: UserService = new UserService();
    constructor() { }

    addPart(path: string, part: Part) {
        var editPage = this.findPage(path);
        editPage.parts.push(part);
    }
    /** 
    *根据页面path来查找数据
    *service
    */
    findPage(path: string): Page {
        return this.userService.user.website.pages
            .find(page => { return page.path == path; });
    }

}
