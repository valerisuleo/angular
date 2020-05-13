import { ITodosState, TODOS_INITIAL_STATE, todosReducer } from './todos/store';
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messages/store';
import { combineReducers } from 'redux';

export interface IAppState {
    tasking: ITodosState;
    newMessages: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
    tasking: TODOS_INITIAL_STATE,
    newMessages: MESSAGING_INITIAL_STATE
}


export const rootReducer = combineReducers({
    tasking: todosReducer,
    newMessages: messagingReducer
});
