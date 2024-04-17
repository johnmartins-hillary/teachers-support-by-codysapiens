import React from "react";
import AuthCheck from "../../../../Helpers/AuthCheck";


const AuthWrapper = ({ children, pageTitle }) => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 overflow-y-auto ">
      <AuthCheck />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto animate:App-logo-float"
          src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
          {pageTitle}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default AuthWrapper;
