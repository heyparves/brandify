"use client";

import { motion } from "framer-motion";
import styles from "../../styles";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import Button from "../button/Button";
import { fa } from "react-icons";
const Hero = () => {
  return (
    <section
      className={`${styles.yPaddings} bg-[#D6DCE1] w-[100%] h-[100%] object-scale-[10p] bg-righ-top sm:pl-16 pl-6`}
    >
      <video src="/videoBg.mp4" autoPlay muted loop className="video" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col h-[800px] relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Build & Grow
          </motion.h1>
          <motion.div variants={textVariant(1.2)}>
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="flex flex-row gap-0">
                <h1 className={styles.heroHeading}>Bran</h1>
                <div className={`${styles.heroDText}`} />
              </div>

              <Button label="Learn More" large lwidth />
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <video src="@/public/videoBg.mp4" />
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <video
            src="/images/facebook.svg"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
