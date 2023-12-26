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
        ${outline ? "bg-transparent" : "bg-neutral-800"}
        ${outline ? "border-neutral-800" : "border-neutral-800"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${large ? "py-5" : "py-3"}
        ${large ? "text-lg" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
        ${lwidth ? "w-[300px]" : "w-full"}

      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
