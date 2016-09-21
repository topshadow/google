export interface Part {
    type: string;
}
export interface Page {
    path: string;
    parts: Part[];
}

export interface Website {

}

export var website= {
    pages: [{
        path: 'index',
        parts: [
            {
                type: 'a'
            }
        ]
    }
    ]
};
