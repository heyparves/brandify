import React from "react";

const ContentText = ({ title, subtitle, description, center }) => {
  return (
    <div
      className={`${
        center ? "text-center" : "text-start"
      } flex flex-col sm:gap-2 gap-4 py-10`}
    >
      <div className="font-bold xl:text-[80px] lg:text-[70px] md:text-[60px] sm:text-[35px] text-[35px]  uppercase ">
        {title}
      </div>
      <div className="font-bold xl:text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[18px]  uppercase font-normal text-neutral-400">
        {subtitle}
      </div>
      <div className="font-bold xl:text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] text-[18px]  uppercase font-normal text-neutral-400">
        {description}
      </div>
    </div>
  );
};

export default ContentText;
