import { Suspense } from "react";
import { useRouter } from "next/router";
import PostItem from "@/components/posts/post";
import { usePostDetails } from "@/hooks/useFetchPostDetails";

export default function PostPage() {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;
  const { postDetails } = usePostDetails(id as string);
  console.log(postDetails);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <PostItem post={postDetails} />
    </Suspense>
  );
}
