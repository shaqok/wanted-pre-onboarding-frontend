import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import '../App.css'
import { makeRequest } from '../utils/makeRequest'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const createTodo = async () => {
    const response = await makeRequest('/todos', 'post', { todo: todoInput}, true);
    if (response.status === 201) {
      setTodos(todos.concat({...response.data}))
    }
    setTodoInput('');
  }

  const updateTodo = async (data) => {
    const { id, todo, isCompleted } = data;
    const response = await makeRequest(`/todos/${id}`, 'put', { todo, isCompleted: !isCompleted }, true);
    if (response.status === 200) {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.todo = response.data.todo;
          todo.isCompleted = response.data.isCompleted;
        }
        return todo;
      })
      setTodos(newTodos)
    }
  }

  const deleteTodo = async (id) => {
    const response = await makeRequest(`/todos/${id}`, 'delete', null, true);
    if (response.status === 204) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos)
    }
  }

  useEffect(() => {
    const getTodos = async () => {
      const response = await makeRequest('/todos', 'get', null, true);
      if (response.status === 200) {
        setTodos(todos.concat(response.data));
      }
    }

    getTodos();
  }, [])
  

  return (
    <div className='todo-container'>
      <div>
          
        <input 
          data-testid="new-todo-input" 
          value={todoInput} 
          onChange={(event) => setTodoInput(event.target.value)} 
        />
        <button data-testid="new-todo-add-button" onClick={createTodo}>추가</button>
      </div>

      <ul className='todo-ul'>
        {todos && todos.map((data) => 
          <TodoItem 
            key={data.id} 
            data={data} 
            updateTodo={updateTodo} 
            deleteTodo={deleteTodo}
          />
        )}
      </ul>
    </div>
  )
}

export default TodoList