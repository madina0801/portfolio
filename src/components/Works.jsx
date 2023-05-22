import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My works
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");
