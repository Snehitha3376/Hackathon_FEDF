import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category.jsx';
import data from './data.js';

/*
 App responsibilities:
 - Maintain loggedIn state (persisted to sessionStorage)
 - Protect routes so login is required
*/

export default function App() {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('tc_user')) || null; } catch { return null; }
  });

  useEffect(() => {
    if (user) sessionStorage.setItem('tc_user', JSON.stringify(user));
    else sessionStorage.removeItem('tc_user');
  }, [user]);

  function handleLogin(username) {
    setUser({ username });
  }

  function handleLogout() {
    setUser(null);
  }

  // list of categories from data
  const categories = Object.keys(data);

  return (
    <div className="app">
      {/* If logged in show header */}
      {user && <Header user={user} onLogout={handleLogout} />}

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/home" replace />}
          />

          <Route
            path="/home"
            element={user ? <Home categories={categories} /> : <Navigate to="/" replace />}
          />

          <Route
            path="/category/:slug"
            element={user ? <Category data={data} /> : <Navigate to="/" replace />}
          />

          <Route path="*" element={<div style={{ padding: 24 }}>404 — Page not found</div>} />
        </Routes>
      </main>
    </div>
  );
}
