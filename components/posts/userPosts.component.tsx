import { useUserPosts } from "@/hooks/getUserPost.hook";
import { Post } from "@/types";
import { Suspense } from "react";
import PostItem from "./post";

export default function UserPosts() {
  const { data } = useUserPosts();
  return (
    <Suspense fallback={<div>loading...</div>}>
      {data?.posts.length ? (
        data?.posts.map((post: Post) => (
          <PostItem key={post.id} post={post} userPost />
        ))
      ) : (
        <h2 className="text-gray-500 text-2xl">
          no posts yet please, create one
        </h2>
      )}
    </Suspense>
  );
}
