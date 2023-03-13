import React, { ChangeEvent, useState } from "react";
type Props = {};
export const CreatePost: React.FC<Props> = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(evt.target.value);
  };
  return (
    <form>
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
      <div>
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
