import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // this for redirection

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/'); //redirect to Home page
    } catch (err) {
      alert('Login failed');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="bg-custom-color3 min-h-screen flex justify-center items-start pt-20">
      <form
        className="max-w-md mx-auto p-6 bg-richblack-700"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4 text-white text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border"
          required
        />

        <button
          type="submit"
          className="w-full bg-black hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
