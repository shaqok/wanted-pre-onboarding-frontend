import React from 'react'

const TodoItem = ({ data, updateTodo, deleteTodo }) => {
  const { id, todo, isCompleted } = data;

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
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={() => deleteTodo(id)}>삭제</button>
    </li>
  )
}

export default TodoItem