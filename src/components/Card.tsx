import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type Props = {
  item: {
    title: string;
    url: string;
  };
  i: number;
  targetScale: number;
  range: number[];
  progress: MotionValue<number>;
};

function Card({ item, i, targetScale, range, progress }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={ref} className="h-[768px] 2xl:h-[125vh] sticky top-[12.5%]">
      <motion.div
        style={{ scale }}
        className="flex flex-col items-center justify-evenly h-[450px] w-[90vw] lg:w-[50vw] 2xl:h-[70vh]"
      >
        <div className="flex items-center justify-evenly h-[100%] w-[100%]">
          <div className="relative h-full w-full overflow-hidden rounded-md 2xl:rounded-[0.375vw]">
            <h1 className="text-white font-[100] tracking-tighter leading-[100%] text-4xl lg:text-[4vw] z-10 absolute top-[2.5%] left-[2.5%]">
              {item.title}
            </h1>
            <motion.div
              style={{ scale: imgScale }}
              className="relative h-[100%] w-[100%] overflow-hidden"
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
