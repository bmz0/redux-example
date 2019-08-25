import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_TODO, SET_EDITMODE } from '../state/actions';
import InlineEditor from './Editor';
import styles from './todoitem.module.css';

export default function TodoItem({ completed, id, title }) {
  const dispatch = useDispatch();
  const editTodo = useSelector(state => state.app.editTodo);

  return (
    <li className={styles.todo}>
      <input className={styles.checkboxinput} id={`todo-item-${id}`} type="checkbox" checked={completed} onChange={() => dispatch({ type: TOGGLE_TODO, id })} />
      <label htmlFor={`todo-item-${id}`} className={styles.checkmark} />
      {editTodo === id ? (
        <span className={`${styles.title} ${styles.editmode}`}>
          <InlineEditor initialValue={title} id={id} />
        </span>
      ) : (
        <span className={styles.title}>
          <span>{title}</span>
          <button className={styles.editbutton} type="button" onClick={() => dispatch({ type: SET_EDITMODE, id })} aria-label="Edit">&#9997;</button>
        </span>
      )}
      <Link className={styles.button} to={`/todo/${id}`}>&hellip;</Link>
    </li>
  )
}
