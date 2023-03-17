import { User } from "@/types";
import axios from "axios";
import { useQuery } from "react-query";

export const useUserPosts = () => {
  const getUserPosts = async () => {
    const { data: userPosts } = await axios.get("/api/posts/getUserPosts");
    return userPosts;
  };
  const { data, isLoading, error } = useQuery<User>({
    queryFn: getUserPosts,
    queryKey: ["user-posts"],
  });
  return { data, isLoading, error };
};
