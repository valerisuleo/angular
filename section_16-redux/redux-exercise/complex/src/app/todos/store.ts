import { tassign } from 'tassign';
import ACTIONS from '../actions';

export interface ITodosState {
    todos: any[];
    lastUpdate: string; 
  }

export const TODOS_INITIAL_STATE: ITodosState = {
    todos: [],
    lastUpdate: '19:42:07',
}

export function todosReducer(state: ITodosState = TODOS_INITIAL_STATE, action): ITodosState {

    const { type, title, completed, todos, current, lastUpdate } = action;

    if (type === ACTIONS.GET && todos) {
        return tassign(state, { todos: state.todos.concat(todos) })
    }

    if (type === ACTIONS.CREATE) {
        const newTodo = { title, completed };        
        return tassign(state, { 
            todos: state.todos.concat(newTodo),
            lastUpdate
         })
    }

    if (type === ACTIONS.UPDATE) {
        const clone = [...state.todos];
        const index = clone.indexOf(current);
        const updatedItem = { ...current };

        updatedItem.completed = !updatedItem.completed;
        clone[index] = updatedItem;

        return tassign(state, { todos: clone })
    }

    if (type === ACTIONS.DELETE) {
        const { id } = current;
        return tassign(state, { todos: state.todos.filter(items => items.id !== id) })
    }
    
    if (type === ACTIONS.DELETE_ALL) {
        return tassign(state, {
            todos: [],
            lastUpdate: ''
          });
    }
    return state;
}