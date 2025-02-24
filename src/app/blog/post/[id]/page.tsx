import Post from "@/app/ui/components/posts/Post";
import { posts } from "@/app/lib/placeholder-data";
import { Post as PostType } from "@/app/lib/definitions";

export default function Page({params}: {params: {id: string}}) {
  const post = posts.find((post) => post.id === params.id);
  return (
    <>
      <h1>Post</h1>
      <Post {...post as PostType}/>
    </>
  );
}
