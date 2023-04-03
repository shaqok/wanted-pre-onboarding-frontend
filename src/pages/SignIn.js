import React from 'react'
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../utils/makeRequest';

const SignIn = () => {
  const navigate = useNavigate();

  const onSignIn = async (email, password) => {
    const body = { email, password }
    const response = await makeRequest('/auth/signin', 'post', body, false);
    if (response.status === 200) {
      localStorage.setItem('access_token', response.data.access_token);
      navigate('/todo');
    }
  }

  return (
    <div>
      <LoginForm onSubmit={onSignIn} buttonText='SignIn' />
    </div>
  )
}

export default SignIn