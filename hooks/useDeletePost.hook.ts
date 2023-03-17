import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useMutation, QueryClient } from "react-query";

export default function useDeletePost() {
  const queryClient = new QueryClient();
  let deleteToastId: string;
  const deletePost = async (id: string) => {
    const { data } = axios.delete("/api/posts/deletePost", { data: { id } });
    console.log(data);
    return data;
  };
  const { mutate } = useMutation(deletePost, {
    onError: (err) => {
      if (err instanceof AxiosError) {
        console.log(err.message);
        toast.error(err.message, { id: deleteToastId });
      }
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("successfully deleting post🔥", { id: deleteToastId });
      queryClient.invalidateQueries(["user-posts"]);
    },
  });
  return { mutate };
}
