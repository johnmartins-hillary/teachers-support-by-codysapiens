"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { getAuthDetails, selectAuth } from "../../../lib/features/authSlice";
import { loginUser } from "../../(APICalls)/auth";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector(selectAuth);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(getAuthDetails({ name, value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser({ email, password });
    } else {
      toast.error("All fields are required");
    }
  };

  return (
    <AuthWrapper pageTitle={"Log in to your account"}>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email Address"
            value={email}
            onChangeHandler={handleInputChange}
            required={true}
            name="email"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            innerLink={"/auth/reset-password"}
            innerLinkText={"Forgot password?"}
            value={password}
            onChangeHandler={handleInputChange}
            required={true}
            name="password"
          />
          <Button
            btnText={"Log in"}
            type={"submit"}
            onClickHandler={handleLogin}
            customClassName=" w-full"
          />
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/auth/create-account"
            className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Login;
