import { Post } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

export const usePostDetails = (id: string) => {
  const fetchPostDetails = async () => {
    const response = await axios.get(`/api/posts/${id}`);
    return response.data;
  };
  const { data: postDetails, isLoading } = useQuery<Post>({
    queryFn: fetchPostDetails,
    queryKey: ["post-details"],
  });
  return { postDetails, isLoading };
};
