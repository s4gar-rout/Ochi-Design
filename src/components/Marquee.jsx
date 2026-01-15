import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.09"
      className="w-full py-[8.8vw] bg-[#004D43] rounded-tl-2xl rounded-tr-2xl "
    >
      <div className="text flex border-t-[0.5px] border-b-[0.5px]  border-zinc-100 whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="font-[font1] leading-none uppercase font-semibold text-white -mb-6 -mt-14 text-[28vw] pr-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="font-[font1] leading-none uppercase font-semibold text-white -mb-6 -mt-14 text-[28vw] pr-10"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};
export default Marquee;
