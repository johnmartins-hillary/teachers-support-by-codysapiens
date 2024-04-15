import React from "react";

const Button = ({
  btnText,
  onClickHandler,
  customClassName,
  disabled,
  type,
}) => {
  return (
    <button
      type={type}
      className={
        "flex justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600  " +
        customClassName
      }
      disabled={disabled}
      onClick={onClickHandler}
    >
      {btnText}
    </button>
  );
};

export default Button;
