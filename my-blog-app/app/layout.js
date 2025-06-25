import Link from 'next/link';
import './globals.css';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          <CartProvider>
            <NavBar />
            <main>{children}</main>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}