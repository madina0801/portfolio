import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I can work with
        </p>
        <h2 className={`${styles.sectionHeadText} mb-12`}>
          Technologies
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
