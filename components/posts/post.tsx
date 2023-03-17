import useDeletePost from "@/hooks/useDeletePost.hook";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Toggle from "./toggleDelete";

type Props = {
  post: Post;
  userPost?: boolean;
};
export default function PostItem({ post, userPost }: Props) {
  const [toggle, setToggle] = useState(false);
  const { mutate } = useDeletePost();
  const handleDelete = () => {
    mutate(post.id);
    setToggle(false);
  };
  return (
    <>
      <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex itmes-center gap-2">
          <Image
            src={post.user.image!}
            alt={post.id}
            width={32}
            height={32}
            priority
          />
          <h3 className="font-bold text-gray-700">{post.user.name}</h3>
        </div>
        <div className="my-8">
          <p className="break-all">{post.title}</p>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          {userPost ? (
            <>
              <span className="text-sm font-bold text-gray-700">
                {post.comments.length} Comments
              </span>
              <button
                onClick={() => setToggle(true)}
                className="text-red-500 text-sm font-bold"
              >
                Delete
              </button>
            </>
          ) : (
            <Link href={`/post/${post.id}`}>
              <span className="text-sm font-bold text-gray-700">
                {post.comments.length} Comments
              </span>
            </Link>
          )}
        </div>
      </div>
      {userPost && toggle && (
        <Toggle handleToggle={setToggle} handleDelete={handleDelete} />
      )}
    </>
  );
}
