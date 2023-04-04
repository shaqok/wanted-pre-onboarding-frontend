import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Main = () => {
  return (
    <div className='main-container'>
      <Link to={`/signin`}>
        <button className='main-btn'>Sign In</button>
      </Link>

      <Link to={`/signup`}>
        <button className='main-btn'>Sign Up</button>
      </Link>
    </div>
  )
}

export default Main