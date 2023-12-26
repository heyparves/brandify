import React from "react";

const MainHeading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="font-bold xl:text-[160px] lg:text-[140px] md:text-[100px] sm:text-[50px] text-[60px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase ">
        {title}
      </div>
      <div className="">{subtitle}</div>
    </div>
  );
};

export default MainHeading;
