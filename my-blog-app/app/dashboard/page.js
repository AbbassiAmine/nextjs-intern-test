'use client'

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../context/AuthContext';



export default function Dashboard() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // Prevent flash of content while redirecting
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your dashboard! This content is only visible to logged-in users.
      </p>
    </div>
  );
}