import React from 'react'

const TodoItem = ({ data, updateTodo }) => {
  const { todo, isCompleted } = data;

  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={isCompleted}
          onChange={() => updateTodo(data)}
        />
        <span>{todo}</span>
      </label>
    </li>
  )
}

export default TodoItem