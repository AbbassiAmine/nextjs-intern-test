
'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';




export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === 'user' && formData.password === 'password') {
      login('fake-jwt-token');
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border rounded border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Use username: <strong>user</strong> and password: <strong>password</strong>
      </p>
    </div>
  );
}