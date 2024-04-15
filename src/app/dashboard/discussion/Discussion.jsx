"use client";

import React, { useState } from "react";
import Input from "../../Components/Form/Input";
import TextArea from "../../Components/Form/TextArea";
import Button from "../../Components/Form/Button";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";

// Sample data for posts and comments
const initialPosts = [
  {
    id: 1,
    title: "First Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    comments: [],
  },
  {
    id: 2,
    title: "Second Post",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    comments: [],
  },
];

const DiscussionForum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      content: newPostContent,
      comments: [],
    };
    setPosts([...posts, newPost]);
    setNewPostTitle("");
    setNewPostContent("");
  };

  const handleCommentSubmit = (postId, commentContent) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, commentContent],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <PageWrapper>
      <div className="container mx-auto mt-8 px-8 overflow-y-auto h-full">
        {/* Form to create new posts */}
        <form onSubmit={handleNewPostSubmit} className="mb-10">
          <Input
            type="text"
            placeholder="Enter post title"
            value={newPostTitle}
            onChangeHandler={(e) => setNewPostTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mr-2"
          />
          <TextArea
            placeholder="Enter post content"
            value={newPostContent}
            onChangeHandler={(e) => setNewPostContent(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
          <Button
            type="submit"
            customClassName=" text-white px-4 py-2 rounded-md w-40 mt-4"
            btnText={"Create Post"}
          />
        </form>
        {/* List of posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-300 rounded-lg p-4 mb-4"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            {/* List of comments */}
            <ul className="mt-2">
              {post.comments.map((comment, index) => (
                <li key={index} className="ml-4">
                  {comment}
                </li>
              ))}
            </ul>
            {/* Form to add comments */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const commentContent = e.target.comment.value;
                handleCommentSubmit(post.id, commentContent);
                e.target.reset();
              }}
              className="flex mt-4 gap-2"
            >
              <Input
                type="text"
                name="comment"
                placeholder="Add a comment"
                customClassName="border border-gray-300 rounded-md p-2 mr-2 w-60 mt-4"
              />
              <Button
                type="submit"
                customClassName=" text-white px-4 py-2 rounded-md w-40 mt-4"
                btnText={"Add Comment"}
              />
            </form>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default DiscussionForum;
