import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import ACTIONS from '../../actions';

@Component({
    selector: 'widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    constructor( private ngRedux: NgRedux<IAppState>) { }

    @select(s => s.tasking.todos) todos: any[];
    @select(s => s.tasking.lastUpdate) lastUpdate: any;

    todosDeleteAll() {
        this.ngRedux.dispatch({ type: ACTIONS.DELETE_ALL })
    }

    ngOnInit(): void {
    }

}
