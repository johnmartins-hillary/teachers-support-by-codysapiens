import React from "react";
import AuthWrapper from "../../Components/Reusables/Wrapers/AuthWrapper";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { selectAuth } from "../../../lib/features/authSlice";
import { useDispatch } from 'react-redux';
import {createUser} from "../../../../backend-app/APICalls/auth"

const CreateAccount = () => {
  const { registrationEmail, registrationPassword, field, confirmPassword } =
    useSelector(selectAuth);
  const dispatch = useDispatch()

  
    const handleInputChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      dispatch(getAuthDetails({ name, value }));
  };
  
   const handleSignUp = async (e) => {
     e.preventDefault();

     if (
       !registrationEmail ||
       !field ||
       !registrationPassword ||
       !confirmPassword
     ) {
       toast.error("All fields are required!");
     } else if (registrationPassword !== confirmPassword) {
       toast.error("Passwords do not match!");
     } else {
       createUser({
             email: registrationEmail,
             field,
             password: registrationPassword,
             confirmPassword,
           })
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
            value={registrationEmail}
            onChangeHandler={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Enter your professional field"
            label="Field"
            value={field}
            onChangeHandler={handleInputChange}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            value={registrationPassword}
            onChangeHandler={handleInputChange}
          />
          <Input
            type="password"
            placeholder="Re enter your password"
            label="Confirm Password"
            value={confirmPassword}
            onChangeHandler={handleInputChange}
          />
          <Button
            btnText={"Sign up"}
            type={"submit"}
            customClassName=" w-full"
          />
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
