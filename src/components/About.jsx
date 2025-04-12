import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello there! I'm Gloria,{" "}
        <span className="text-[#915EFF]">
          final year Software Engineering student
        </span>{" "}
        at{" "}
        <span className="text-[#915EFF]">
          College of Arts, Media, and Technology, Chiangmai University.
        </span>
        I am interested in building web apps, machine learning models for NLP
        field and teaching/tutoring (both coding and non-coding things). I'm a
        skilled fullstack developer with experience in TypeScript, JavaScript,
        and expertise in frameworks like React, Vue, and Node. I'm a quick
        learner and collaborate closely with team members to create efficient,
        user-friendly solutions that solve real-world problems.
      </motion.p>
      <a href="gloria_cv.pdf" target="_blank">
        <button className="mt-6 p-2 bg-white text-[#915eff]">
          Download CV
        </button>
      </a>
    </>
  );
};

export default SectionWrapper(About, "about");
