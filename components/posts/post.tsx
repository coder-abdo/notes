import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: Post;
};
export default function PostItem({ post }: Props) {
  return (
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
        <Link href={`/post/${post.id}`}>
          <span className="text-sm font-bold text-gray-700">
            {post.comments.length} Comments
          </span>
        </Link>
      </div>
    </div>
  );
}
