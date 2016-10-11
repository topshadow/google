import { Injectable } from '@angular/core';
import { UserService, firebase, objectToArray } from 'core';

/**
 * 模块发布服务
 */
@Injectable()
export class PublishService {
    private publishRef = firebase.database().ref('publish');
    private userService = new UserService();

    /**
     * publish navbar
     * 
     */
    publishNavbar(navbar: Navbar, commet: string) {
        navbar.publishInfo = { username: this.userService.user.username, commet: commet };
        this.publishRef.push(navbar);
    }

    /**
     * 获取发布的导航列表,传入回调函数
     * 
     */
    getNavbarList(callback: (navbarList: Navbar[]) => void) {
        this.publishRef.on('value', (snapshot) => {
            var navbarList = objectToArray(snapshot.val());
            callback(navbarList);
        });
    }

}

