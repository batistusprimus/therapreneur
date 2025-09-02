import Link from 'next/link';
import { listPosts } from '@/lib/outrank';

export default async function BlogIndexPage() {
  const posts = await listPosts().catch(() => []);

  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog</h1>
      <p className="text-gray-600 mb-8">Articles publiés via Outrank.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.length === 0 && (
          <p className="text-gray-500">Aucun article pour le moment.</p>
        )}
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="p-6 border rounded-xl hover:border-title transition-colors">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            {post.excerpt && <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}



