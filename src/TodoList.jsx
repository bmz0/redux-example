import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './todolist.module.css';
import TodoItem from './TodoItem';
import { PRELOAD_TODOS } from './actions';
import Details from './Details';

const fetchURL = 'http://jsonplaceholder.typicode.com/todos';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const app = useSelector(state => state.app);
  const detailedTodo = app.detailedTodo !== null && todos.find(todo => todo.id === app.detailedTodo);

  const dispatch = useDispatch();

  useEffect(
    () => {
      async function preloadTodos() {
        const response = await fetch(fetchURL)
        const todos = await response.json();

        dispatch({ type: PRELOAD_TODOS, todos });
      };
      preloadTodos();
    },
    [dispatch]
  );

  return (
    detailedTodo ? (
      <Details todo={detailedTodo} />
    ) : (
      <>
      <h2>Todo list</h2>
      <ul className={styles.list}>
        {todos.map(todo => (
          <TodoItem key={`todo-${todo.id}`} {...todo} />
        ))}
      </ul>
      </>
    )
  )
}

export default TodoList;
