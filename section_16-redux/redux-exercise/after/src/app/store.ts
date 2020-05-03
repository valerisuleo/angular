import ACTIONS from './actions';
import { tassign } from 'tassign';

export interface IAppState {
    todos: any[];
    lastUpdate?: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
}

export function rootReducer(state: IAppState, action): IAppState {

    const { type, title, completed, todos, current } = action;

    if (type === ACTIONS.GET && todos) {
        return tassign(state, { todos: state.todos.concat(todos) })
    }

    if (type === ACTIONS.CREATE) {
        const newTodo = { title, completed };
        return tassign(state, { todos: state.todos.concat(newTodo) })
    }

    if (type === ACTIONS.UPDATE) {
        const clone = [...state.todos];
        let index = clone.indexOf(current);
        const updatedItem = { ...current };
        updatedItem.completed = !updatedItem.completed;
        clone[index] = updatedItem;
        return tassign(state, { todos: clone })
    }

    if (type === ACTIONS.DELETE) {
        const { id } = current;
        return tassign(state, { todos: state.todos.filter(items => items.id !== id) })
    }
    return state;
}