"use client"

import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { toast } from "react-toastify";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { getAuthDetails, selectAuth, setLoggedInUser } from "../../../lib/features/authSlice";

  const Login = () => {
    const dispatch = useDispatch();
    const { email, password } = useSelector(selectAuth);

    const handleInputChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      dispatch(getAuthDetails({ name, value }));
    };

    const handleLogin = (e) => {
      e.preventDefault();

      if (!email) {
        toast.error("Please enter your email address");
      } else if (!password) {
        toast.error("Please enter your password");
      } else {
        dispatch(
          setLoggedInUser({ username: "hillary", field: "mathematics", email })
        );
        toast.success("logged in successfully");
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
            />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="auth/create-account"
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
