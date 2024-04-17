"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "The Importance of Reading",
      content:
        "Reading is a fundamental skill that opens doors to knowledge, imagination, and personal growth. Whether you're exploring new worlds in fiction or delving into the depths of non-fiction, reading enriches your mind and broadens your horizons. In today's fast-paced world, where information is abundant and constantly evolving, the ability to read critically and thoughtfully is more important than ever. So pick up a book, dive into its pages, and discover the wonders that reading has to offer!",
      comments: [],
    },
    {
      id: 2,
      title: "Exploring the Wonders of Science",
      content:
        "Science is a fascinating journey into the mysteries of the universe. From the smallest particles to the vastness of space, science allows us to uncover the secrets of existence and understand the workings of the world around us. Through observation, experimentation, and collaboration, scientists push the boundaries of knowledge and pave the way for technological advancements that shape our lives. So let's embrace the spirit of curiosity and embark on an exploration of the wonders of science!",
      comments: [],
    },
    {
      id: 3,
      title: "The Art of Cooking",
      content:
        "Cooking is more than just a necessity—it's an art form that brings people together and nourishes the soul. Whether you're a novice in the kitchen or a seasoned chef, there's always something new to learn and explore in the world of cooking. From mastering basic techniques to experimenting with exotic ingredients, cooking offers endless opportunities for creativity and expression. So let's don our aprons, fire up the stove, and savor the delights of culinary craftsmanship!",
      comments: [],
    },
    {
      id: 4,
      title: "Discovering the Beauty of Nature",
      content:
        "Nature is a treasure trove of beauty and wonder, offering breathtaking landscapes, diverse ecosystems, and fascinating creatures. From towering mountains to pristine beaches, from lush forests to vast deserts, the natural world captivates our senses and inspires awe and reverence. Whether you're an avid hiker, a passionate photographer, or simply a lover of the outdoors, there's no shortage of wonders to discover and explore in the great outdoors. So let's venture into the wilderness, breathe in the fresh air, and immerse ourselves in the splendor of nature!",
      comments: [],
    },
    {
      id: 5,
      title: "The Power of Positive Thinking",
      content:
        "Positive thinking is a powerful force that can transform our lives and shape our destinies. By maintaining a positive outlook and focusing on the good in every situation, we can overcome challenges, achieve our goals, and lead happier, more fulfilling lives. Positive thinking not only boosts our mood and enhances our well-being but also attracts positive opportunities and outcomes into our lives. So let's cultivate a positive mindset, banish negativity, and embrace the boundless potential of positive thinking!",
      comments: [],
    },
  ],
  newPostTitle: "",
  newPostContent: "",
};

export const discussionSlice = createSlice({
  name: "discussion",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setNewPostTitle: (state, action) => {
      state.newPostTitle = action.payload;
    },
    setNewPostContent: (state, action) => {
      state.newPostContent = action.payload;
    },
    getDiscussionDetails: (state, action) => ({
      ...state,
      [action?.payload?.name]: action?.payload?.value,
    }),
  },
});

export const {
  setPosts,
  getDiscussionDetails,
  setNewPostTitle,
  setNewPostContent,
} = discussionSlice.actions;
export const selectDiscussion = (state) => state.discussion;
export const discussionReducer = discussionSlice.reducer;
