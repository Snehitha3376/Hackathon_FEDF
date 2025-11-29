import React, { useState } from 'react';
import './login.css';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!username.trim()) return setError('Please enter a username');
    onLogin(username.trim());
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={submit}>
        <h2>Login</h2>
        <p className="muted">Enter any username to continue</p>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => { setUsername(e.target.value); setError(''); }}
        />
        {error && <div className="form-error">{error}</div>}
        <button className="btn-primary" type="submit">Enter</button>
      </form>
      <div className="login-hero">
        <img src="https://startuppakistan.com.pk/wp-content/uploads/2021/08/handicrafts-from-pakistan-or-mypakpartner-com.jpeg" alt="handcrafts" />
      </div>
    </div>
  );
}
