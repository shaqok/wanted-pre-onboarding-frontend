import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div>
        <Link to={`/signin`}>
          <button>Sign In</button>
        </Link>

        <Link to={`/signup`}>
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Main