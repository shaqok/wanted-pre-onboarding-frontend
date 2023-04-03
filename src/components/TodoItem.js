import React from 'react'

const TodoItem = ({ content }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{content}</span>
      </label>
    </li>
  )
}

export default TodoItem