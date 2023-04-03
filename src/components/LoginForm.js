import React, { useState, useEffect } from 'react'

const LoginForm = ({ onSubmit, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const checkValidation = (email, password) => {
    (email.includes('@') && password.length >= 8) ? setIsValid(false) : setIsValid(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  useEffect(() => {
    checkValidation(email, password);
  }, [email, password])
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          data-testid="email-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      {buttonText === 'SignUp' ? (
        <button
        data-testid="signup-button" type="submit" disabled={isValid}>회원가입</button>
        ) : (
        <button
        data-testid="signin-button" type="submit" disabled={isValid}>로그인</button>
      )}
    </form>
  );
}

export default LoginForm