import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-4">
        This is a simple blog built with Next.js. Check out the latest posts!
      </p>
      <Link href="/blog" className="text-blue-600 hover:underline">
        View Blog
      </Link>
    </div>
  );
}