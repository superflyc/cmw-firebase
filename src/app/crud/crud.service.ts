import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

@Injectable()
export class CrudService {

    constructor(private afs: AngularFirestore) {
    }

}
