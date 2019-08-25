import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SELECT_USER, TOGGLE_TODO } from '../state/actions';
import styles from './details.module.css';

function Details({ match }) {
  const idParam = parseInt(match.params.id);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const users = useSelector(state => state.users);
  const selectedUser = useSelector(state => state.app.selectedUser);

  const todo = todos[idParam];
  if (!todo) return null;
  const user = users[todo.userId];
  if (!user) return null;

  if (user.id !== selectedUser) dispatch({ type: SELECT_USER, userId: user.id });

  const todoKeys = Object.keys(todos);
  const prevTodo = idParam > 0 ? todos[idParam - 1] : null;
  const nextTodo = idParam < todoKeys.length ? todos[idParam + 1] : null

  return (
    <>
      <h2 className={styles.header}>Todo #{todo.id}</h2>
      <div className={styles.details}>
        <table>
          <tbody>
          <tr>
            <th>ID</th><td>{todo.id}</td>
          </tr>
          <tr>
            <th>User</th><td>{user.username}</td>
          </tr>
          <tr>
            <th>Title</th><td>{todo.title}</td>
          </tr>
          <tr>
            <th>Complete</th>
            <td>
              <button type="button" className={styles.toggle} onClick={() => dispatch({ type: TOGGLE_TODO, id: todo.id })}>Toggle</button>
              {JSON.stringify(todo.completed)}
            </td>
          </tr>
          </tbody>
        </table>
        <div className={styles.links}>
          {prevTodo && <Link className={`${styles.link} ${styles.prev}`} to={`/todo/${prevTodo.id}`}>Previous</Link>}
          <Link className={`${styles.link} ${styles.back}`} to="/">Back to list</Link>
          {nextTodo && <Link className={`${styles.link} ${styles.next}`} to={`/todo/${nextTodo.id}`}>Next</Link>}
        </div>
      </div>
    </>
  )
}

export default Details;
