import React from 'react'
import TodoItem from './TodoItem'
import '../App.css'

const mockData = ['todo 1', 'todo 2', 'todo 3']

const TodoList = () => {
  return (
    <div className='todo-container'>
      <ul className='todo-ul'>
        {mockData.map((todo, i) => <TodoItem key={i} content={todo} />)}
      </ul>
    </div>
  )
}

export default TodoList