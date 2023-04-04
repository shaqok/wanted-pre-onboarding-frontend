import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'
import { makeRequest } from '../utils/makeRequest'

const SignUp = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const onSignUp = async (email, password) => {
    const body = { email, password }
    const response = await makeRequest('/auth/signup', 'post', body, false);
    if (response.status === 201) {
      navigate('/signin');
    } else {
      alert('이미 존재하는 계정이거나 오류가 발생했습니다.');
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
    <>
      {showLoginForm && <LoginForm onSubmit={onSignUp} buttonText='SignUp' />}
    </>
  )
}

export default SignUp