import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const post = posts.find((post) => post.id === resolvedParams.id);
  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>)
}