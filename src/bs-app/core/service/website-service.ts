import { Injectable } from '@angular/core';
import { firebase, UserService } from 'core';

export var defaultNavbar: Navbar = {
    type: 'navbar'
};


@Injectable()
export class WebsiteService {
    firebase: any = firebase;
    storageRef =firebase.storage().ref();
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

    /**
    上传图片
    
    */
    upload(file:File){
      var metadata={   'contentType': file.type};
      this.storageRef.child('images/'+file.name).put(file,metadata).then((snapshot)=>{
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
 console.log(snapshot.metadata);
 var url = snapshot.metadata.downloadURLs[0];
 console.log('File available at', url);
      });
    }
}
