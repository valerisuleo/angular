import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ID } from './interface';
import { map, first } from 'rxjs/operators';
import { snapsCoverter } from './db-utilities';
import { OrderByDirection } from '@firebase/firestore-types';

@Injectable()
export class DataService {

    constructor(private db: AngularFirestore) { }

    // getPromise() {
    //     return this.db.collection('courses').get().toPromise();
    // }

    getAll(collectioName: string) {
        const response: AngularFirestoreCollection<ID> = this.db.collection(collectioName);

        return response.snapshotChanges()
            .pipe(
                map(snaps => snapsCoverter(snaps))
            )
    }

    getCollectionPaginated(collectioName: string, key: string, sortOrder: OrderByDirection, pageNumber?: number, pageSize?: number) {
        const response: AngularFirestoreCollection<ID> = this.db.collection(
            collectioName,
            ref => ref
                .orderBy(key, sortOrder)
                .limit(pageSize)
                .startAfter(pageNumber * pageSize)
        );

        return response.snapshotChanges()
            .pipe(
                map(snaps => snapsCoverter(snaps)),
                first()
            )
    }

    getRefItem(path) {
        return this.db.doc(path).snapshotChanges();
    }

    getItem(collectioName: string, id: string) {
        return this.db.collection(collectioName).doc(id).valueChanges();
    }
    
    create(collectioName: string, newResource) {
        return this.db.collection(collectioName).add(newResource)
    }

    update(collectioName: string, id: string, resource) {
        return this.db.collection(collectioName).doc(id).set(resource)
    }

    delete(collectioName: string, id: string) {
        return this.db.collection(collectioName).doc(id).delete();
    }


    //___________________ CUSTOM QUERIES___________________
    getLessonsPaginated(
        collectioName: string,
        sortOrder: OrderByDirection,
        pageNumber?: number,
        pageSize?: number
    ) {
        const response: AngularFirestoreCollection<ID> = this.db.collection(
            collectioName,

            ref => ref
                .where('courseId', '==', 7)
                .orderBy('seqNo', sortOrder)
                .limit(pageSize)
                .startAfter(pageNumber * pageSize)
        );

        return response.snapshotChanges()
            .pipe(
                map(snaps => snapsCoverter(snaps)),
                first()
            )
    }
}
