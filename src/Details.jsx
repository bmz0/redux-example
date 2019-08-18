import React from 'react';
import { useDispatch } from 'react-redux';
import { HIDE_DETAILS, SHOW_DETAILS, TOGGLE_TODO } from './actions';
import styles from './details.module.css';

function Details({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.details}>
      <h2>Todo details</h2>
      <table>
        <tbody>
        <tr>
          <th>ID</th><td>{todo.id}</td>
        </tr>
        <tr>
          <th>User</th><td>{todo.userId}</td>
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
      <div className={styles.buttons}>
        <button type="button" onClick={() => dispatch({ type: SHOW_DETAILS, id: Math.max(1, todo.id - 1) })}>Previous</button>
        <button type="button" onClick={() => dispatch({ type: HIDE_DETAILS })}>Back to list</button>
        <button type="button" onClick={() => dispatch({ type: SHOW_DETAILS, id: Math.min(200, todo.id + 1) })}>Next</button>
      </div>
    </div>
  )
}

export default Details;
