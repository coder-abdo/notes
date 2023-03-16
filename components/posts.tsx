import PostItem from "./posts/post";
import { usePosts } from "@/hooks/getPosts.hook";
import { Suspense } from "react";
export default function Posts() {
  const { data: posts, isLoading, error } = usePosts();
  if (error instanceof Error) {
    return (
      <div className="text-red-700 font-bold text-lg">{error.message}</div>
    );
  }
  return (
    <Suspense
      fallback={
        <div className="text-lg font-bold text-yellow-400">...loading</div>
      }
    >
      {posts?.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
    </Suspense>
  );
}
