import React, { useState, useRef } from 'react'
import '../App.css'

const TodoItem = ({ data, updateTodo, deleteTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { id, todo, isCompleted } = data;
  const inputRef = useRef(todo);

  const handleSubmit = () => {
    updateTodo({ ...data, todo: inputRef.current.value }, 'submit');
    setIsEdit(false);
  }

  return (
    <li className='todo-li'>
      <label>
        <input 
          type="checkbox" 
          checked={isCompleted}
          onChange={() => updateTodo(data, 'check')}
        />
        {isEdit ? (
          <input data-testid="modify-input" defaultValue={todo} ref={inputRef} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEdit ? (
        <div>
          <button 
            data-testid="submit-button" 
            onClick={handleSubmit}
          >
            제출
          </button>
          <button data-testid="cancel-button" onClick={() => setIsEdit(false)}>취소</button>
        </div>
      ) : (
        <div>
          <button data-testid="modify-button" onClick={() => setIsEdit(true)}>수정</button>
          <button data-testid="delete-button" onClick={() => deleteTodo(id)}>삭제</button>
        </div>
      )}
    </li>
  )
}

export default TodoItem