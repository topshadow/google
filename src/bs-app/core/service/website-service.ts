import { Injectable } from '@angular/core';
import { firebase, UserService } from 'core';

export var defaultNavbar: Navbar = {
    type: 'navbar'
};


@Injectable()
export class WebsiteService {
    firebase: any = firebase;
    storageRef = firebase.storage().ref();
    public userService: UserService = new UserService();
    constructor() { }

    addPart(path: string, part: Part) {
        var editPage = this.findPage(path);
        if (!editPage.parts) { editPage.parts = []; }
        editPage.parts.push(part);
    }

    /**
    *根据页面path来查找数据
    *service
    */
    findPage(path: string): Page {
        path = path.startsWith('/') ? path.substring(1) : path;
        path = path.indexOf(';') != -1 ? path.substring(0, path.indexOf(';')) : path;
        return this.userService.user.website.pages
            .find(page => { return page.path == path; });
    }


    /**
     * 上传图片接口
     * 使用方法
     * var file = document.getElementById('selectFileInput').files[0];
     * WebsiteService.upload(file);
     */
    upload(file: File): Promise<string> {
        var metadata = { 'contentType': file.type };
        return this.storageRef.child('images/' + file.name).put(file, metadata).then((snapshot) => {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log(snapshot.metadata);
            var url = snapshot.metadata.downloadURLs[0];
            console.log('File available at', url);
            return url;
        });
    }

    clearWebsite() {
        this.userService.user.website = { pages: [{ path: 'index', parts: [] }] };
    }

    get pages(): Page[] {
        return this.userService.user.website.pages;
    }

}

