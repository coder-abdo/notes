import { useRouter } from "next/router";
import PostItem from "@/components/posts/post";
import { usePostDetails } from "@/hooks/useFetchPostDetails";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const { postDetails, isLoading, error } = usePostDetails(id as string);
  if (isLoading)
    return (
      <div className="text-lg text-orange-500 flex justify-center items-center">
        loading...
      </div>
    );
  if (error instanceof Error)
    return (
      <div className="text-lg text-red-600 flex justify-center items-center">
        {error.message}
      </div>
    );
  return <PostItem post={postDetails!} />;
}
