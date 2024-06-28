"use client";
import Services from "@/components/Services";
import { motion } from "framer-motion";

const text = {
  initial: { y: "100%" },
  animate: (i: number) => ({
    y: 0,
    transition: {
      type: "tween",
      duration: 0.75,
      delay: 0.25 + i * 0.05,
      ease: [0, 0.55, 0.45, 1],
    },
  }),
};

export default function Home() {
  return (
    <>
      <div className="mx-auto w-[90%] h-[768px] lg:h-[600px] 2xl:h-screen flex items-center justify-center gap-1 2xl:gap-[0.3vw]">
        <p className="flex flex-wrap items-center justify-center gap-1 2xl:gap-[0.3vw] font-semibold text-xl lg:text-[2.5vw] text-center leading-[125%]">
          {"Card stacking animation. Scroll down to interact."
            .split(" ")
            .map((char, i) => (
              <span className="overflow-hidden" key={i}>
                <motion.span
                  variants={text}
                  initial="initial"
                  animate="animate"
                  className="inline-flex whitespace-nowrap"
                  custom={i}
                >
                  {char}
                </motion.span>
              </span>
            ))}
        </p>
      </div>
      <Services />
      <div className="mx-auto w-[90%] h-[768px] lg:h-[600px] 2xl:h-screen flex items-center justify-center">
        <p className="flex flex-wrap items-center justify-center gap-1 2xl:gap-[0.3vw] font-semibold text-xl lg:text-[2.5vw] text-center leading-[125%]">
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            .split(" ")
            .map((char, i) => (
              <span className="overflow-hidden" key={i}>
                <motion.span
                  variants={text}
                  initial="initial"
                  whileInView="animate"
                  className="inline-flex whitespace-nowrap"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {char}
                </motion.span>
              </span>
            ))}
        </p>
      </div>
    </>
  );
}
