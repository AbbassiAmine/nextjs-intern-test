import Link from 'next/link';

export const metadata = {
  title: 'Blog | My Website',
  description: 'Read the latest blog posts on our website.',
};

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', 
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export default async function Blog() {
  let posts = [];
  let error = null;

  try {
    posts = await getPosts();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded hover:bg-gray-50">
            <Link href={`/blog/${post.id}`} className="block">
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600">{post.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}