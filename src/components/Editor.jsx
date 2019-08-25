import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './editor.module.css';
import { SET_EDITMODE, UPDATE_TODO } from '../state/actions';

export default function Editor({ id, initialValue }) {
  const [editValue, setEditValue] = useState(initialValue);
  const dispatch = useDispatch();

  const closeEdit = () => dispatch({ type: SET_EDITMODE, editTodo: null });
  const saveEdit = () => {
    closeEdit();
    dispatch({ type: UPDATE_TODO, id, title: editValue });
  }

  return (
    <>
      <input ref={input => input && input.focus()} className={styles.editor} type="text" onChange={({ target: { value } }) => setEditValue(value)} value={editValue} />
      <button className={styles.savebutton} type="button" onClick={saveEdit} aria-label="Save">&#10004;</button>
      <button className={styles.cancelbutton} type="button" onClick={closeEdit} aria-label="Cancel">&#10008;</button>
    </>
  );
}
