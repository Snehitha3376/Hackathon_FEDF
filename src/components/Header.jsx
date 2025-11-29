import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header({ user, onLogout }) {
  return (
    <header className="site-header">
      <div className="site-brand">
        <Link to="/home" className="brand-link">Welcome to Tribal Crafts</Link>
        <div className="brand-sub">Support tribal artisans — handcrafted & traceable</div>
      </div>

      <nav className="main-nav">
        <Link to="/home">Home</Link>
        <Link to="/category/clothes">Clothes</Link>
        <Link to="/category/crafts">Crafts</Link>
        <Link to="/category/pottery">Pottery</Link>
        <Link to="/category/jewellery">Jewellery</Link>
      </nav>

      <div className="auth-area">
        {user ? (
          <>
            <span className="user-name">Hi, {user.username}</span>
            <button className="btn-logout" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/" className="btn-login">Login</Link>
        )}
      </div>
    </header>
  );
}
