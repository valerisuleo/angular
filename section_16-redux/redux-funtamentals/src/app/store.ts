import { INCREMENT } from './actions';
import {tassign} from 'tassign';
 
export interface IAppState {
    // determines the shape of tour store
    counter: number;
}

export const INITIAL_STATE: IAppState = {
    counter: 0
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case INCREMENT: 
        state.counter++
        return tassign(state, { counter: state.counter + 1 });        
    }
    return state;
}

