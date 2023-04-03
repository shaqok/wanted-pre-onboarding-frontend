import React, { useState, useRef } from 'react'

const TodoItem = ({ data, updateTodo, deleteTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { id, todo, isCompleted } = data;
  const inputRef = useRef(todo);

  const handleSubmit = () => {
    updateTodo({ ...data, todo: inputRef.current.value }, 'submit');
    setIsEdit(false);
  }

  return (
    <li>
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
        <>
          <button 
            data-testid="submit-button" 
            onClick={handleSubmit}
          >
            제출
          </button>
          <button data-testid="cancel-button" onClick={() => setIsEdit(false)}>취소</button>
        </>
      ) : (
        <>
          <button data-testid="modify-button" onClick={() => setIsEdit(true)}>수정</button>
          <button data-testid="delete-button" onClick={() => deleteTodo(id)}>삭제</button>
        </>
      )}
    </li>
  )
}

export default TodoItem