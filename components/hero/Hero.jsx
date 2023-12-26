"use client";

import { motion } from "framer-motion";
import styles from "../../styles";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import Button from "../button/Button";
import MainHeading from "../heading/MainHeading";
import { GoArrowUpRight } from "react-icons/go";
import PrimaryHeading from "../heading/PrimaryHeading";

const Hero = ({ title, subtitle, onClick }) => {
  return (
    <section
      className={`bg-[#D6DCE1] w-[100%] h-[100%] lg:h-[90vh] object-scale-[10p] bg-righ-top sm:pl-16 pl-6 overflow-hidden z-[1]`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col z-10`}
      >
        <div className="flex justify-center items-center flex-col h-[800px] relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            <MainHeading title="BUILD & GROW" center />
          </motion.h1>
          <motion.div variants={textVariant(1.2)}>
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="flex flex-row gap-0">
                <MainHeading title="BRAND" center />
                <div className={`${styles.heroDText}`} />
              </div>

              <Button
                label="LET'S BUILD TOGETHER"
                icon={GoArrowUpRight}
                large
                lwidth
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <video
        src="/videoBg.mp4"
        autoPlay
        muted
        loop
        preload
        playsInline
        type="video/mp4"
        controls={false}
        className="hero-video"
      />
    </section>
  );
};

export default Hero;
