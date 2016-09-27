// declare var module: { id: string };
declare var require: any;
declare var module: any;

interface Part {
    type: string;
}

interface Page {
    parts: Part[];
    path: string;
}

interface Website {
    pages: Page[]
}

interface User {
    username: string;
    password: string;
    repeatPassword?: string;
    website?: Website
}

interface Doc {
    title: string;
    url: string;
    summary: string;
}

interface Button {
    type: 'md-button' | 'md-raised-button' | 'md-fab';
    color: string;
}


interface Col {
    colspan: number | null | undefined;//默认是1
    component?: any; //列的容器
}

interface GridLayout {
    cols: Col[];
}


interface Styles {
    color?: string;//字体颜色
    backgroundColor?: string;//背景颜色
}

/**
 * 控制面板的数据格式,常用于向上发射显示面板数据的类型检查
 *
 * 用法:
 *  @output  openPanel = new EventEmmitter(<Panel>);
 *
 * this.openPanel.emit({})
 *
 * 已经放弃使用
 */
interface Panel {
    type: KeyType;
    data?: any;

}

interface Navbar {
    type: 'navbar'
    styles?: Styles;
    data?: any;
    publishInfo?: any;//发布者
}



interface Part {
    type: string;
}