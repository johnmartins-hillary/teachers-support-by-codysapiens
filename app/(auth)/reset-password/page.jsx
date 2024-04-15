"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.newPassword ||
      !formData.confirmNewPassword
    ) {
      toast.error("All fields are required!");
    } else if (formData.newPassword !== formData.confirmNewPassword) {
      toast.error("New passwords do not match!");
    } else {
      toast.success("Password reset successful!");
      // Perform additional logic for password reset, such as making an API call
    }
  };

  return (
    <AuthWrapper pageTitle={"Reset Password"}>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleResetPassword}>
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email Address"
            value={formData.email}
            onChangeHandler={handleInputChange}
            name="email"
          />
          <Input
            type="password"
            placeholder="Enter new password"
            label="New Password"
            value={formData.newPassword}
            onChangeHandler={handleInputChange}
            name="newPassword"
          />
          <Input
            type="password"
            placeholder="Re enter new password"
            label="Confirm New Password"
            value={formData.confirmNewPassword}
            onChangeHandler={handleInputChange}
            name="confirmNewPassword"
          />
          <Button btnText={"Reset Password"} type={"submit"} />
        </form>
      </div>
      <ToastContainer />
    </AuthWrapper>
  );
};

export default ResetPassword;
