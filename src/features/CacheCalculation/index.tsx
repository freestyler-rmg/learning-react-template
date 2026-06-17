import { useState, useEffect } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './todos.tsx';

export default function CacheCalculation() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  // const [text, setText] = useState('');
  // const [visibleTodos, setVisibleTodos] = useState([]);

  // useEffect(() => {
  //   setVisibleTodos(getVisibleTodos(todos, showActive));
  // }, [todos, showActive]);

  const visibleTodos = getVisibleTodos(todos, showActive);

  // function handleAddClick() {
  //   setText('');
  //   setTodos([...todos, createTodo(text)]);
  // }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}