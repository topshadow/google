import { Injectable } from '@angular/core';
import { firebase } from 'core';
@Injectable()
export class DocService {
    firebase = firebase;

    addDoc(doc:Doc) {
        this.firebase.database().ref('docs').push(doc);
    }

}
