import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ID } from './interfaces';
import { map, first } from 'rxjs/operators';



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


}
