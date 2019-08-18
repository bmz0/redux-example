import React from 'react';
import { Provider } from 'react-redux';
import styles from './app.module.css';
import store from './store';
import TodoList from './TodoList';

const todosStore = store({ todos: [], app: { detailedTodo: null }});

function App() {
  return (
    <Provider store={todosStore}>
      <div className={styles.main}>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
