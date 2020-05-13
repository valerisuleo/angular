import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import ACTIONS from '../../actions';

@Component({
    selector: 'messaging',
    templateUrl: './messaging.component.html',
    styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

    @select(s => s.newMessages.newMessages) newMessages; 

    constructor(private ngRedux: NgRedux<IAppState>) { }


    increment() {
        this.ngRedux.dispatch({ type: ACTIONS.INCREMENT });
    }

    decrement() {
        this.ngRedux.dispatch({ type: ACTIONS.DECREMENT });
    }

    ngOnInit(): void {
    }

}
