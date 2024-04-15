import React from "react";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";


const ResetPassword = () => {
  return (
    <AuthWrapper pageTitle={"Create an account"}>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email Address"
          />
          <Input
            type="password"
            placeholder="Enter new password"
            label="New Password"
            innerLink={"#"}
          />
          <Input
            type="password"
            placeholder="Re enter new password"
            label="Confirm New Password"
            innerLink={"#"}
          />
          <Button btnText={"Sign up"} type={"submit"} />
        </form>
      </div>
    </AuthWrapper>
  );
};


export default ResetPassword;
