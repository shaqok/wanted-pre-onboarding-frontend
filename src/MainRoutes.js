import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Todo from './pages/Todo'
import NotFound from './pages/NotFound'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/todo' element={<Todo />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default MainRoutes