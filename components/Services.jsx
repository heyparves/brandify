"use client";
import React from "react";
import PrimaryHeading from "./heading/PrimaryHeading";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import Blurb from "./Blurb";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  return (
    <div className={`${styles.innerWidth} ${styles.yPaddings}`}>
      <motion
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion variants={fadeIn("up", "tween", 0.2, 1)}>
          <PrimaryHeading
            title="From A Digital Idea"
            subtitle="To Actual Web App & Marketing Solution."
            center
          />
        </motion>

        <div className="flex flex-row items-center justify-center w-full  ">
          <div className="flex flex-col flex-wrap justify-center items-center  w-[30%]">
            <Blurb
              title="This is a title text"
              subtitle="this is subtitle text"
              description="Ok this is description text where you can add any text that need to show here"
              icon={GoArrowUpRight}
            />
            <Blurb
              title="This is a title text"
              subtitle="this is subtitle text"
              description="Ok this is description text where you can add any text that need to show here"
              icon={GoArrowUpRight}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-[40%]">
            <video
              src="/video/services.mp4"
              autoPlay
              muted
              loop
              preload
              playsInline
              type="video/mp4"
              controls={false}
              className="object-cover w-[100%] h-[100%] z-[-1]"
            />
          </div>
          <div className="flex flex-col justify-center items-center   w-[30%]">
            <Blurb
              title="This is a title text"
              subtitle="this is subtitle text"
              description="Ok this is description text where you can add any text that need to show here"
              icon={GoArrowUpRight}
            />
            <Blurb
              title="This is a title text"
              subtitle="this is subtitle text"
              description="Ok this is description text where you can add any text that need to show here"
              icon={GoArrowUpRight}
            />
          </div>
        </div>
      </motion>
    </div>
  );
};

export default Services;
