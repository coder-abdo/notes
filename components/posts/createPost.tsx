import { TOTALCHARS } from "@/constants";
import useAddPost from "@/hooks/addPost.hook";
import React, { ChangeEvent, useState } from "react";
type Props = {};
export const CreatePost: React.FC<Props> = () => {
  const { handleSubmit, handleChange, title, isDisabled } = useAddPost();

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col my-4">
        <textarea
          name="title"
          id="title"
          className="py-4 text-lg rounded-md my-2 bg-gray-200 px-4 outline-none focus:shadow-sm"
          placeholder="what is on your mind?"
          value={title}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className={`flex items-center justify-between gap-3`}>
        <p
          className={`font-bold text-sm ${
            title.length > TOTALCHARS ? "text-red-700" : "text-gray-700"
          }`}
        >
          {title.length} / {TOTALCHARS}
        </p>
        <button
          type="submit"
          disabled={isDisabled}
          className="text-sm bg-teal-700 border border-teal-700 text-white py-2 px-4 rounded-md disabled:cursor-not-allowed hover:bg-transparent hover:text-teal-700 transition-colors hover:cursor-pointer"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};
