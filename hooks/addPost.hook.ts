import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useMutation } from "react-query";

export default function useAddPost() {
  let toastId: string;
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(evt.target.value);
  };
  const { mutate } = useMutation(
    async (title) => await axios.post("/api/posts/addPost", { title }),
    {
      onError: (err) => {
        if (err instanceof AxiosError) {
          toast(err?.response?.data.message, { id: toastId });
        }
        setIsDisabled(false);
        setTitle("");
      },
      onSuccess: (data) => {
        toast.success("post has been made 🔥", { id: toastId });
        setTitle("");
        setIsDisabled(false);
      },
    }
  );
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    toast.loading("...loading ⬇️", { id: toastId });
    setIsDisabled(true);
    mutate(title as any);
  };
  return { mutate, title, handleChange, handleSubmit, isDisabled };
}
