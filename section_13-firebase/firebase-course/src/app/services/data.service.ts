import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ID } from './interface';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private db: AngularFirestore) { }

    getAll(collectioName: string) {
        const response: AngularFirestoreCollection<ID> = this.db.collection(collectioName);

        return response.snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map((rawData) => {
                        const obj = rawData.payload.doc.data();
                        obj.id = rawData.payload.doc.id;
                        return obj;
                    });
                }))
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
}
