import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Component({
    selector: 'batched-writes',
    templateUrl: './batched-writes.component.html',
    styleUrls: ['./batched-writes.component.scss']
})
export class BatchedWritesComponent implements OnInit {

    constructor(private db: AngularFirestore) { }

    save() {
        const batch = this.db.firestore.batch();
        const courseRef1 = this.db.doc('/courses/1qJ8ASAAJF4gkiOoL7fn').ref;
        const courseRef2 = this.db.doc('/courses/L0LejQthkgBzIMLL859Q').ref;

        batch.update(courseRef1, {titles: {description: 'Bleach'}});
        batch.update(courseRef2, {titles: {description: 'Naruto'}});

        const batch$ = of(batch.commit());

        batch$.subscribe((data) => {
            console.log(data);
        })
    }

    ngOnInit(): void {

    }

}
