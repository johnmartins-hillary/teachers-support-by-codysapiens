"use client";
import React, { useEffect } from "react";
import { selectAuth } from "../lib/features/authSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AuthCheck = () => {
  const { loggedInUser } = useSelector(selectAuth);
  const router = useRouter();

  useEffect(() => {
    if (loggedInUser) {
      router.push("/dashboard/home");
    } else {
      router.push("/auth-pages/login")
    }
  }, [loggedInUser]);

  return null;
};

export default AuthCheck;
