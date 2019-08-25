import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './state/store';
import * as serviceWorker from './serviceWorker';

const todosStore = store({ todos: {}, users: {}, app: { editTodo: null, selectedUser: 1 }});

ReactDOM.render(
  <Provider store={todosStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
