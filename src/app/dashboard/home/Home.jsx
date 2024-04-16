"use client";

import React from "react";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import WhiteShadowCard from "../../Components/Reusables/Cards/WhiteShadowCard";
import {
  students,
  newBooks,
  jobOffers,
  blogs,
  discussionPosts,
  updates,
  events,
} from "./utils";
import { IoSchool } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { MdOutlineWork,MdPostAdd, MdTipsAndUpdates,MdEvent} from "react-icons/md";
import { FaBlog } from "react-icons/fa";
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
          {/* Latest Job Offers for Teachers */}
          <WhiteShadowCard
            title="Latest Job Offers for Teachers"
            icon={<MdOutlineWork size={24} />}
            link="/dashboard/job-board"
          >
            {jobOffers?.map((offer) => (
              <div key={offer.id} className="border-b py-2">
                {offer.position} - {offer.location}
              </div>
            ))}
          </WhiteShadowCard>
          {/* Latest Blogs */}
          <WhiteShadowCard
            title="Latest Blogs"
            icon={<FaBlog size={24} />}
            link="/dashboard/blog"
          >
            {blogs?.map((blog) => (
              <div key={blog.id} className="border-b py-2">
                {blog.title} by {blog.author}
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
          {/* Upcoming Events */}
          <WhiteShadowCard
            title="Upcoming Events"
            icon={<MdEvent size={24} />}
            link="/dashboard/calender-event"
          >
            {events?.map((event) => (
              <div key={event.id} className="border-b py-2">
                {event.name} - {event.date}
              </div>
            ))}
          </WhiteShadowCard>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
