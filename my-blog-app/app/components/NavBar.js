'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

function CartSummary() {
  const { itemCount, cartTotal } = useContext(CartContext);
  return (
    <div className="text-sm">
      Cart: {itemCount} items (${cartTotal.toFixed(2)})
    </div>
  );
}

function AuthStatus() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <div className="flex items-center space-x-4">
      {isAuthenticated ? (
        <>
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <button onClick={logout} className="hover:underline">
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="hover:underline">
          Login
        </Link>
      )}
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Website
        </Link>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:underline">
                Cart
              </Link>
            </li>
          </ul>
          <CartSummary />
          <AuthStatus />
        </div>
      </div>
    </nav>
  );
}