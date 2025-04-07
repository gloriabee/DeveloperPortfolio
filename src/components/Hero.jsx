import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0  text-center max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-center gap-5`}
      >
        <div>
          <div className="w-[200px] h-[200px] mx-auto mt-5 rounded-full overflow-hidden">
            <img
              src="profile2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className={`${styles.heroHeadText} text-[#915EFF]`}>
            Naw Gloria Win Nyunt
          </h1>
          <p className={`${styles.sectionText} mt-2 text-white-100`}>
            Software Engineer | Machine Learning | Lifelong Learner
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
