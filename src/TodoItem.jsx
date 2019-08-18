import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_TODO, SHOW_DETAILS } from './actions';
import styles from './todoitem.module.css';

export default function TodoItem({completed, id, title}) {
  const dispatch = useDispatch();
  return (
    <li className={styles.todo}>
      <input id={`todo-item-${id}`} type="checkbox" checked={completed} onChange={() => dispatch({ type: TOGGLE_TODO, id })} />
      <label htmlFor={`todo-item-${id}`} className={styles.checkmark} />
      <span className={styles.title} onClick ={() => dispatch({ type: SHOW_DETAILS, id })}>
        {title}
      </span>
    </li>
  )
}
