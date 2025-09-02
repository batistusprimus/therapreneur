import { getPostBySlug } from '@/lib/outrank';
import { notFound } from 'next/navigation';

type Params = { params: { slug: string } };

export default async function BlogPostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) return notFound();

  return (
    <article className="container-custom py-16 prose prose-invert max-w-3xl">
      <h1>{post.title}</h1>
      {post.publishedAt && (
        <p className="text-gray-500">Publié le {new Date(post.publishedAt).toLocaleDateString('fr-FR')}</p>
      )}
      {post.content ? (
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      ) : (
        <p className="text-gray-400">Contenu non disponible.</p>
      )}
    </article>
  );
}



