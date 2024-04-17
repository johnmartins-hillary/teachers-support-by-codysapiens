"use client";
import React, { useState } from "react";
import PageWrapper from "../../Components/Reusables/Wrapers/PageWrappper";
import { selectAuth } from "../../../lib/features/authSlice";
import { useSelector } from "react-redux";
import UserAvatar from "../../Components/Reusables/Avatar/UserAvatar"


const UserSettingsPage = () => {
  const {loggedInUser} = useSelector(selectAuth)
  // Sample user data
  const [user, setUser] = useState({
    username: "example_user",
    email: "user@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to update user settings
    console.log("User settings updated:", user);
  };

  return (
    <PageWrapper>
      <div className="container mx-auto mt-8 px-8 overflow-y-auto h-full text-gray-500">
        <h1 className="text-3xl font-bold mb-4">User Settings</h1>
        <UserAvatar />
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={loggedInUser?.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-24"
            ></textarea>
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={user.notifications}
                onChange={handleChange}
                className="mr-2 rounded text-purple-500 border-gray-300 focus:ring-purple-400"
              />
              <label
                htmlFor="notifications"
                className="text-sm font-medium text-gray-700"
              >
                Receive notifications
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
    </PageWrapper>
  );
};

export default UserSettingsPage;
