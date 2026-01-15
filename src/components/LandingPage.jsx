import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import content from "../assets/Images/content-image01.jpg";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.4"
        className="w-full h-screen pt-1"
      >
        <div className="txt-wrappper mt-40 px-10">
          {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, idx) => {
            return (
              <div className="hero-txt">
                <div className="w-fit flex items-end">
                  {idx === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8.2vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="h-[5.7vw] w-[8.2vw] overflow-hidden  relative mr-[1vw] top-[1vw] rounded-xl"
                    >
                      <img
                        className="h-full w-full object-cover "
                        src={content}
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1 className="pt-[1vw] -mb-[1vw] uppercase text-[8.5vw] leading-[.80] tracking-normal font-[font1] text-[#212121]">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-zinc-400 mt-44 flex justify-between px-10 py-4">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map((item, idx) => {
            return <p className="">{item}</p>;
          })}
          <div className="start flex items-center gap-1 ">
            <div className="px-3 py-1 uppercase rounded-full text-md font-semibold border border-black">
              Start the Project
            </div>
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
