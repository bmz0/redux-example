import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import styles from './app.module.css';
import Details from './Details';
import TodoList from './TodoList';
import UserList from './UserList';
import { SET_TODOS, SET_USERS } from '../state/actions';

const baseURL = 'http://jsonplaceholder.typicode.com/';
const todosURL = baseURL + 'todos';
const usersURL = baseURL + 'users';

function mapToObject(array) {
  return array.reduce((acc, item, i) => { acc[i + 1] = item; return acc }, {});
}

function App() {
  const dispatch = useDispatch();

  useEffect(
    () => {
      async function fetchInitialState() {
        const todosResponse = await fetch(todosURL)
        const todosArray = await todosResponse.json();
        const usersResponse = await fetch(usersURL)
        const usersArray = await usersResponse.json();

        const todos = mapToObject(todosArray);
        const users = mapToObject(usersArray);

        dispatch({ type: SET_TODOS, todos });
        dispatch({ type: SET_USERS, users });
      };
      fetchInitialState();
    },
    [dispatch]
  );

  return (
    <div className={styles.main}>
      <UserList />
      <BrowserRouter>
        <Switch>
          <Route path="/todo/:id" component={Details} />
          <Route component={TodoList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
