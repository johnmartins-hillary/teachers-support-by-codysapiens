"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import Link from "next/link";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    field: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.field ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required!");
    } else if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
    } else {
      try {
        const res = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(res);
          if (res.ok) {
            const data = await res.json();
            toast.success(data.message);
          } else {
            const errorData = await res.json();
            toast.error(errorData.error);
          }

      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <AuthWrapper pageTitle={"Create an account"}>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignUp}>
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email Address"
            value={formData.email}
            onChangeHandler={handleInputChange}
            name="email"
          />
          <Input
            type="text"
            placeholder="Enter your professional field"
            label="Field"
            value={formData.field}
            onChangeHandler={handleInputChange}
            name="field"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            value={formData.password}
            onChangeHandler={handleInputChange}
            name="password"
          />
          <Input
            type="password"
            placeholder="Re enter your password"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChangeHandler={handleInputChange}
            name="confirmPassword"
          />
          <Button btnText={"Sign up"} type={"submit"} />
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <Link
            href="/"
            className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </AuthWrapper>
  );
};

export default CreateAccount;
