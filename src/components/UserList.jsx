import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './userlist.module.css';
import { SELECT_USER } from '../state/actions';

function UserList() {
  const users = useSelector(state => state.users);
  const selectedUser = useSelector(state => state.app.selectedUser);

  const dispatch = useDispatch();

  return (
    <ul className={styles.userlist}>
      {Object.values(users).map(user => (
        <li className={`${selectedUser === user.id ? styles.selected : ''}`} key={`user-list-${user.id}`} onClick={() => dispatch({ type: SELECT_USER, userId: user.id })}>{user.username}</li>
      ))}
    </ul>
  )
}

export default UserList;
