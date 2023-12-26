"use client";

import { motion } from "framer-motion";
import styles from "../../styles";
import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section
      className={`bg-[#D6DCE1] w-[100%] h-[100%] object-scale-[10p] bg-righ-top sm:pl-16 pl-6 overflow-hidden z-[1]`}
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
        className="video"
      />
    </section>
  );
};

export default Hero;
