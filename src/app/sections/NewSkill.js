import React, { useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useMeasure } from "react-use";
import { skillsData } from "../JsonData/skills";

const Skills = () => {
  const [ref1, { width: width1 }] = useMeasure();
  const xTranslation1 = useMotionValue(0);

  useEffect(() => {
    let controls1, controls2;
    let finalPosition1 = -(width1 + 10) / 2; // Adjusted final position for gap

    controls1 = animate(xTranslation1, [0, finalPosition1], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      controls1.stop();
    };
  }, [xTranslation1, width1]);

  return (
    <main className="py-8 overflow-hidden">
      <motion.div className="flex gap-10 my-3" ref={ref1} style={{ x: xTranslation1 }}>
        {skillsData.map((item, idx) => (
          <motion.img
            className="w-[90px] h-[90px] bg-white shadow-lg dark:bg-stone-600 p-5 rounded-5xl"
            key={idx}
            src={item.logo.src}
            alt="Card image"
          />
        ))}
      </motion.div>
    </main>
  );
};

export default Skills;
