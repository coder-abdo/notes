import { useQuery } from "react-query";
import axios from "axios";
import { Post } from "@/types";

export const usePostDetails = (id: string) => {
  const fetchPostDetails = async () => {
    const response = await axios.get(`/api/posts/${id}`);
    return response.data;
  };
  const {
    data: postDetails,
    isLoading,
    error,
  } = useQuery<Post>({
    queryFn: fetchPostDetails,
    queryKey: ["post-details"],
  });
  return { postDetails, isLoading, error };
};
