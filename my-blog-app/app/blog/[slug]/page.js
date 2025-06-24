import { notFound } from 'next/navigation';

async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store', 
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.body.slice(0, 160),
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}