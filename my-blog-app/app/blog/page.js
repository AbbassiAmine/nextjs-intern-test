import posts from '../data/posts.json';

export default function Blog() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="border p-4 rounded">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{post.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
