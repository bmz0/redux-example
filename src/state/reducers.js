import { combineReducers } from 'redux';
import { ADD_TODO, SET_TODOS, SET_USERS, REMOVE_TODO, SELECT_USER, SET_EDITMODE, TOGGLE_TODO, UPDATE_TODO } from './actions';

function toggleTodo(state, id) {
  const newState = { ...state };
  newState[id].completed = !newState[id].completed;
  return newState;
}

function removeTodo(state, id) {
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function updateTodo(state, { title, id }) {
  const newState = { ...state };
  newState[id].title = title;
  return newState;
}

function todos(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, ...action.todo };
    case REMOVE_TODO:
      return removeTodo(state, action.id);
    case UPDATE_TODO:
      return updateTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action.id);
    case SET_TODOS:
      return { ...action.todos };
    default:
      return state;
  }
}

function users(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...action.users };
    default:
      return state;
  }
}

function app(state = {}, action) {
  switch (action.type) {
    case SET_EDITMODE:
      return { ...state, editTodo: action.id };
    case SELECT_USER:
      return { ...state, selectedUser: action.userId };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todos,
  users,
  app
});

export default rootReducer;
