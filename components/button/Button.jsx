"use client";

import { IconType } from "react-icons";

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  large,
  small,
  icon: Icon,
  lwidth,
  center,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        hover:opacity-80
        transition
        tracking-widest
        ${outline ? "bg-transparent" : "bg-primary"}
        ${outline ? "border-primary" : "border-transparent"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${large ? "py-5" : "py-3"}
        ${large ? "text-lg" : "text-md"}
        ${small ? "font-light" : "font-normal"}
        ${small ? "border-[1px]" : "border-2"}
        ${lwidth ? "w-[350px]" : "w-full"}

      `}
    >
      {Icon && (
        <Icon
          size={30}
          className="
            absolute
            right-4
            top-5
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
