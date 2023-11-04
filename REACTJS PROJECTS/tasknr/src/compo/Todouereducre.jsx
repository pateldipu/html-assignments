import React, { useReducer, useState } from "react";

// Reducer function to manage todo state
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.text, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo, index) =>
        index === action.index
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo) {
      dispatch({ type: "ADD_TODO", text: newTodo });
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => dispatch({ type: "TOGGLE_TODO", index })}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "REMOVE_TODO", index })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
