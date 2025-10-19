import type { JSX } from "react";
import type { InputProps } from "../types";

const Input = ({
  type,
  value,
  placeHolder,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <input
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
      type={type}
      className="border border-gray-200 w-full p-1.5 rounded-md px-3 text-gray-700 focus:ring-2 outline-none focus:ring-indigo-500"
    />
  );
};

export default Input;
