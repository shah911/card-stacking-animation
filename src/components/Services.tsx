"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Card from "./Card";

const heading = {
  initial: { x: "100%" },
  whileInView: {
    x: 0,
    transition: {
      type: "tween",
      duration: 2,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const data = [
  {
    title: "Augustus",
    url: "/Augustus.jpg",
  },
  {
    title: "Aristocles",
    url: "/Aristocles.jpg",
  },
  {
    title: "Gordian III",
    url: "/greek-img-3.jpg",
  },
  {
    title: "Julius Caesar",
    url: "/Julius Caesar.jpg",
  },
  {
    title: "Marcus Aurelius",
    url: "/Marcus Aurelius.jpg",
  },
];

function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div className="flex flex-col items-center justify-evenly">
      <div ref={ref}>
        {data.map((item, i) => {
          const targetScale = 1 - (data.length - i) * 0.05;
          return (
            <Card
              key={i}
              item={item}
              i={i}
              targetScale={targetScale}
              range={[i * 0.25, 1]}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
