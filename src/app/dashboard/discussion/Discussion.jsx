"use client";

import React, { useState } from "react";
import Input from "../../Components/Form/Input";
import TextArea from "../../Components/Form/TextArea";
import Button from "../../Components/Form/Button";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import WhiteShadowCard from "../../Components/Reusables/Cards/WhiteShadowCard";
import {
  selectDiscussion,
  setPosts,
  setNewPostTitle,
  setNewPostContent,
} from "../../../lib/features/discussionSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DiscussionForum = () => {
  const { posts} = useSelector(selectDiscussion);
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent]  =  useState("")
  const dispatch = useDispatch();

  const handleNewPostSubmit = (e) => {
    e.preventDefault();

    if(newPostTitle && newPostContent){
       const newPost = {
      id: posts.length + 1,
      title: newPostTitle,
      content: newPostContent,
      comments: [],
    };
   dispatch(setPosts([...posts, newPost]))
   setNewPostTitle("");
   setNewPostContent("");
    toast.success("Discussion started");
    }else{
      toast.error("Content and title cannot be empty")
    }
   
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
    if(commentContent){
    dispatch(setPosts(updatedPosts));
    }else{
      toast.error("comment cannot be empty field")
    }
  };

  return (
    <PageWrapper>
      <div className="container mx-auto mt-8 px-8 overflow-y-auto h-full">
        {/* Form to create new posts */}
        <form onSubmit={handleNewPostSubmit} className="mb-10 relative">
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
        {posts?.map((post) => (
          <WhiteShadowCard key={post.id} title={post?.title}>
            <p>{post.content}</p>
            {/* List of comments */}
            <h4 className="text-gray-500 underline mt-2 text-lg ml-4">
              Comments
            </h4>
            <ul className="text-blue-500 list-disc ml-4">
              {post?.comments
                ?.map((comment, index) => (
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
          </WhiteShadowCard>
        ))}
      </div>
    </PageWrapper>
  );
};

export default DiscussionForum;
