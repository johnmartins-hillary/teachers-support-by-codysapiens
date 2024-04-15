import React from "react";

const Input = ({
  label,
  placeholder,
  value,
  defaultValue,
  id,
  name,
  onChangeHandler,
  required,
  customClassName,
  type,
  innerLink,
  innerLinkText,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-white"
        >
          {label}
        </label>
        <div className="text-sm">
          <a
            href={innerLink}
            className="font-semibold text-purple-600 hover:text-purple-500"
          >
            {innerLinkText}
          </a>
        </div>
      </div>

      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className={
            "block w-full rounded-md border border-transparent px-2 py-2 transition-colors  text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 bg-transparent " +
            customClassName
          }
          onChange={onChangeHandler}
          defaultValue={defaultValue}
          placeholder={placeholder}
          value={value}
          autoComplete="off"
          list="autocompleteOff"
        />
      </div>
    </div>
  );
};

export default Input;
