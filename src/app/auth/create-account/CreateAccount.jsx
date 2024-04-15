import React from "react";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";

const CreateAccount = () => {
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
            type="text"
            placeholder="Enter your professional field"
            label="Field"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
          />
          <Input
            type="password"
            placeholder="Re enter your password"
            label="Confirm Password"
          />
          <Button btnText={"Sign up"} type={"submit"} customClassName=" w-full"/>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <a
            href="/auth/login"
            className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
          >
            Login
          </a>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default CreateAccount;
