import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/TodoList';

const Todo = () => {
  const navigate = useNavigate();
  const [showTodo, setShowTodo] = useState(false);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      navigate('/signin');
    } else {
      setShowTodo(true);
    }
  }, [navigate])
  

  return (
    <div>
      {showTodo && <TodoList />}
    </div>
  )
}

export default Todo