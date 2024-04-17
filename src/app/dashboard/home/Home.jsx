"use client";

import React from "react";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import WhiteShadowCard from "../../Components/Reusables/Cards/WhiteShadowCard";
import {
  students,
  newBooks,
  discussionPosts,
  updates,
} from "./utils";
import { IoSchool } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { MdPostAdd, MdTipsAndUpdates} from "react-icons/md";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../lib/features/authSlice";

const Home = () => {
const {loggedInUser} = useSelector(selectAuth)

  return (
    <PageWrapper>
      <div className="container mx-auto mt-8 px-8">
        <h1 className="text-3xl text-gray-500 font-bold mb-8">
          Welcome to Our Platform{" "}
          {loggedInUser?.email.substring(0, loggedInUser?.email.indexOf("@"))}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Students */}
          <WhiteShadowCard
            title="Students"
            icon={<IoSchool size={24} />}
            link="/dashboard/students"
          >
            {students?.map((student) => (
              <div key={student.id} className="border-b py-2">
                {student.name} - {student.grade}
              </div>
            ))}
          </WhiteShadowCard>
          {/* New Releases Books for Teachers */}
          <WhiteShadowCard
            title="New Releases Books for Teachers"
            icon={<ImBooks size={24} />}
            link="/dashboard/resources"
          >
            {newBooks?.map((book) => (
              <div key={book.id} className="border-b py-2">
                {book.title} by {book.author}
              </div>
            ))}
          </WhiteShadowCard>
         
          {/* Latest Posts in Discussion Forum */}
          <WhiteShadowCard
            title="Latest Posts in Discussion Forum"
            icon={<MdPostAdd size={24} />}
            link="/dashboard/discussion"
          >
            {discussionPosts?.map((post) => (
              <div key={post.id} className="border-b py-2">
                {post.topic} by {post.author}
              </div>
            ))}
          </WhiteShadowCard>
          {/* Updates and News For Teachers */}
          <WhiteShadowCard
            title="Updates and News For Teachers"
            icon={<MdTipsAndUpdates size={24} />}
            link="/dashboard/news-and-updates"
          >
            {updates?.map((update) => (
              <div key={update.id} className="border-b py-2">
                {update.title}: {update.description}
              </div>
            ))}
          </WhiteShadowCard>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
