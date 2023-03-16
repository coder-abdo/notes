import { Post } from "@/types";
import axios from "axios";
import { useQuery } from "react-query";

export const usePosts = () => {
  const allPosts = async () => {
    const { data } = await axios.get("/api/posts/getPosts");
    return data;
  };
  const { data, isLoading, error } = useQuery<Post[]>({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  return { data, isLoading, error };
};
