import { tassign } from 'tassign';
import ACTIONS from '../actions';

export interface IMessagingState {
    newMessages: number;
}

export const MESSAGING_INITIAL_STATE: IMessagingState = {
    newMessages: 0
}

export function messagingReducer(state: IMessagingState = MESSAGING_INITIAL_STATE, action): IMessagingState {
    const { type } = action;

    if (type === ACTIONS.INCREMENT) {
        return tassign(state, { newMessages: state.newMessages + 1 });
    }

    if (type === ACTIONS.DECREMENT && state.newMessages > 0) {
        return tassign(state, { newMessages: state.newMessages - 1 });
    }

    return state;
}