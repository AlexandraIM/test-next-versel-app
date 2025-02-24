import Post from "../../ui/components/posts/Post";
import { posts } from "@/app/lib/placeholder-data";
import { Post as PostType } from "../../lib/definitions";

export default function Page() {

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post: PostType) => (
        <Post
          key={post.id}
          {...
            post}

        />
      ))}
    </>
  );
}
