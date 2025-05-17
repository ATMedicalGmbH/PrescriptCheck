import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await authService.login(formData);
      login(token);
      navigate('/dashboard');
    } catch (error) {
      alert('Login fehlgeschlagen');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Benutzername" onChange={handleChange} />
        <input type="password" name="password" placeholder="Passwort" onChange={handleChange} />
        <button type="submit">Einloggen</button>
      </form>
    </div>
  );
};

export default LoginPage;
