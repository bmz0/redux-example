import { combineReducers } from 'redux';
import { ADD_TODO, HIDE_DETAILS, PRELOAD_TODOS, REMOVE_TODO, SHOW_DETAILS, TOGGLE_TODO } from './actions';

function toggleTodoItem(state, id) {
  const index = state.findIndex(todoItem => todoItem.id === id);
  state[index].completed = !state[index].completed;
  return state;
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.todo.id);
    case TOGGLE_TODO:
      return [...toggleTodoItem(state, action.id)];
    case PRELOAD_TODOS:
      return [...action.todos];
    default:
      return state;
  }
}

function app(state = {}, action) {
  switch (action.type) {
    case SHOW_DETAILS:
      return {...state, detailedTodo: action.id};
      case HIDE_DETAILS:
        return {...state, detailedTodo: null};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos,
  app
});

export default rootReducer;
