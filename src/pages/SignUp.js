import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'
import { makeRequest } from '../utils/makeRequest'

const SignUp = () => {
  const navigate = useNavigate();

  const onSignUp = async (email, password) => {
    const body = { email, password }
    const response = await makeRequest('/auth/signup', 'post', body, false);
    if (response.status === 201) {
      navigate('/signin');
    }
  }

  return (
    <div>
      <LoginForm onSubmit={onSignUp} buttonText='SignUp' />
    </div>
  )
}

export default SignUp