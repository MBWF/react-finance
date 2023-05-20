import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  label?: string;
  hasError?: string;
} & ComponentPropsWithoutRef<"input">;

const InputStyled = (
  { label, hasError, ...rest }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <div>
      <label className="block mb-1 text-lg font-medium text-gray-500">
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 outline-none block w-full p-2.5"
        {...rest}
      />
    </div>
  );
};

export const Input = forwardRef(InputStyled);
