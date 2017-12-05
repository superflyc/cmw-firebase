import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';


// thanks to the following two posts:
// from https://angularfirebase.com/lessons/firestore-advanced-usage-angularfire/
// and https://github.com/angular/angularfire2/issues/1337

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable()
export class CrudService {

    static get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    getColl<T>(collRef: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
        // default to sort by dateCreated
        // docs without dateCreated won't be returned
        if (!queryFn) {
            queryFn = ref => ref.orderBy('dateCreated', 'desc');
        }
        return typeof collRef === 'string' ? this.afs.collection<T>(collRef, queryFn) : collRef;

    }

    getDoc<T>(docRef: DocPredicate<T>): AngularFirestoreDocument<T> {
        return typeof docRef === 'string' ? this.afs.doc<T>(docRef) : docRef;
    }

    getColl$<T>(collRef: CollectionPredicate<T>, queryFn?): Observable<any[]> {
        return this.getColl(collRef, queryFn).snapshotChanges()
            .map(docs => {
                return docs.map(doc => {
                    const id = doc.payload.doc.id;
                    const data = doc.payload.doc.data();
                    return {id, ...data};
                });
            });
    }

    getDoc$() {

    }

    saveDoc<T>(docType: T, doc): void {

        // insert
        if (!doc.id) {

        } else {
            // update
        }

    }

    deleteDoc<T>() {

    }

    constructor(private afs: AngularFirestore) {
    }

}
