import React from "react";
import { IconType } from "react-icons";

const Blurb = ({
  title,
  subtitle,
  description,
  center,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-1 p-4 m-5 border-neutral-500 w-full min-h-[120px] hover:bg-white bg-neutral-100 transition shadow-md cursor-pointer hover:translate-y-[-10px]">
      {Icon && (
        <Icon
          size={50}
          className="
          bg-neutral-100
          rounded-full
            relative
            right-0
            top-0
            
          "
        />
      )}
      <h3 className="text-lg font-bold text-dark">{title}</h3>
      <h4 className="text-md font-semibold text-neutral-400">{subtitle}</h4>
      <p className="text-normal font-normal text-neutral-400">{description}</p>
    </div>
  );
};

export default Blurb;
