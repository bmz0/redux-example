import React from 'react';
import { useSelector } from 'react-redux';
import styles from './todolist.module.css';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const users = useSelector(state => state.users);
  const selectedUser = useSelector(state => state.app.selectedUser);

  return (
    <>
      <h2 className={styles.header}>Todos {users[selectedUser] && ` -  ${users[selectedUser].username}`}</h2>
      <ul className={styles.list}>
        {Object.values(todos)
          .filter(todo => todo.userId === selectedUser)
          .map(todo => (
            <TodoItem key={`todo-${todo.id}`} {...todo} />
          )
        )}
      </ul>
    </>
  )
}

export default TodoList;
