import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { FocusCards } from "../ui/focus-cards";

const GoogleGeminiEffectDemo = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjusted path lengths for reduced scrolling duration
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.5], [0.15, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.5], [0.1, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.5], [0.05, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const cards = [
    {
      title: "Github",
      src: "/github.svg",
      link: "https://github.com/PiyushYadav1414",
    },
    {
      title: "LinkedIn",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
      link: "https://www.linkedin.com/in/piyush-yadav-28389b274/",
    },
    {
      title: "X",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg",
      link: "https://x.com/Piyush14Yadav",
    },
    {
      title: "Instagram",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
      link: "https://www.instagram.com/ypiyush14/",
    },
    {
      title: "Leetcode",
      src: "/leetcode.png",
      link: "https://leetcode.com/u/ypiyush14yadav/",
    },
    {
      title: "Kaggle",
      src: "/kaggle.png",
      link: "https://www.kaggle.com/piyushyadav1414",
    },
  ];

  return (
    <div className="pb-10 text-center text-xs sm:text-sm text-gray-500 z-50" id="contact">
      <div
        className="h-[200vh] w-full rounded-md relative overflow-clip"
        ref={ref}
      >
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
      <FocusCards cards={cards} />
      <h1 className="text-4xl font-extralight text-center text-white">or</h1>
      <div className="flex justify-center pt-10 gap-3 md:gap-10 flex-col md:flex-row items-center pb-5 text-white">
        <div className="flex text-xs sm:text-base">
          <a
            href="mailto:sujal21102004@gmail.com"
            className="flex items-center group"
          >
            <img
              src="/gmail.png"
              alt="gmail"
              className="pr-5 group-hover:scale-125 transition-transform duration-300 w-auto max-w-[50px]"
            />
            ypiyush14yadav@gmail.com
          </a>
        </div>
        <div className="flex text-xs sm:text-base">
          <a
            href="tel:+919115664773"
            className="flex items-center group"
          >
            <img
              src="/call.png"
              alt="call"
              className="pr-5 group-hover:scale-125 transition-transform duration-300 w-auto max-w-[50px]"
            />
            +1 (647) 330-0498
          </a>
        </div>
      </div>
      © 2025 ypiyush14yadav@gmail.com . All rights reserved.
    </div>
  );
};

export default GoogleGeminiEffectDemo;
