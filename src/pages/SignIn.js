import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../utils/makeRequest';

const SignIn = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const onSignIn = async (email, password) => {
    const body = { email, password }
    const response = await makeRequest('/auth/signin', 'post', body, false);
    if (response.status === 200) {
      localStorage.setItem('access_token', response.data.access_token);
      navigate('/todo');
    } else {
      alert('비밀번호가 다르거나 가입되지 않은 계정입니다.')
    }
  }

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      navigate('/todo')
    } else {
      setShowLoginForm(true);
    }
  }, [navigate])

  return (
    <div>
      {showLoginForm && <LoginForm onSubmit={onSignIn} buttonText='SignIn' />}
    </div>
  )
}

export default SignIn