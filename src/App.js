import TodoList from './Components/TodoList';
import React, { useState } from 'react';
function App() {

  const [todos, setTodos] = useState([]);

  const props = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <TodoList>{props}</TodoList>
    </div>
  );
}

export default App;
