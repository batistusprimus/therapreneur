export type OutrankPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
};

const OUTRANK_API_BASE = process.env.NEXT_PUBLIC_OUTRANK_API_BASE || '';
const OUTRANK_API_KEY = process.env.OUTRANK_API_KEY || '';

export async function fetchOutrank<T>(path: string, init?: RequestInit): Promise<T> {
  if (!OUTRANK_API_BASE) throw new Error('NEXT_PUBLIC_OUTRANK_API_BASE manquant');
  const res = await fetch(`${OUTRANK_API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(OUTRANK_API_KEY ? { Authorization: `Bearer ${OUTRANK_API_KEY}` } : {}),
    },
    ...init,
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Erreur Outrank: ${res.status}`);
  return res.json();
}

export async function listPosts(): Promise<OutrankPost[]> {
  return fetchOutrank<OutrankPost[]>('/posts');
}

export async function getPostBySlug(slug: string): Promise<OutrankPost & { content?: string }>{
  return fetchOutrank<OutrankPost & { content?: string }>(`/posts/${slug}`);
}



