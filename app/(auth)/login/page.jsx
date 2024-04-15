// Login.jsx
"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data.message);
        toast.success(data.message);
      } else {
        const errorData = await res.json();
        console.error("Login failed:", errorData.message);
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Fatal error.");
    }
  };
  return (
    <AuthWrapper pageTitle={"Log in to your account"}>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email"
            value={formData.email}
            onChangeHandler={handleInputChange}
            name="email"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            innerLink={"/reset-password"}
            innerLinkText={"Forgot password?"}
            value={formData.password}
            onChangeHandler={handleInputChange}
            name="password"
          />
          <Button btnText={"Log in"} type={"submit"} />
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            href="/register"
            className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer />
    </AuthWrapper>
  );
};

export default Login;
