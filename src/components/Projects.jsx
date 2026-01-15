import React from "react";
import img1 from "../assets/Images/Salience_Website.png";
import img2 from "../assets/Images/Med_Website.png";
import img3 from "../assets/Images/Frame-.png";
import img4 from "../assets/Images/Vise_Front.png";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (idx) => {
    cards[idx].start({ y: "0" });
  };
  const handleHoverEnd = (idx) => {
    cards[idx].start({ y: "100%" });
  };
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="0.1"
        className="w-full min-h-screen pb-40"
      >
        <div className="px-10 py-10 font-[font2] border-b border-zinc-900">
          <h1 className="text-[4vw] tracking-tighter">Featured projects</h1>
        </div>
        <div className="px-10">
          <div className="w-full flex gap-10">
            <div className="w-1/2 h-[6vh] mt-10 flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-black"></div>
              <h1>SALIENCE LAB</h1>
            </div>
            <div className="w-1/2 h-[6vh] mt-10 flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-black"></div>
              <h1>MEDALLIA EXPERIENCE</h1>
            </div>
          </div>
          <div className="card-wrapper w-full flex gap-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="card-container w-1/2 h-[70vh] relative"
            >
              <h1 className="absolute flex text-[#CDEA68] overflow-hidden font-[font1] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-9 leading-none tracking-tight text-[10vw] whitespace-nowrap">
                {"SALIENCE LAB".split("").map((item, idx) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.01 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="h-full w-full object-cover" src={img1} alt="" />
              </div>

              <div className="button-div w-full h-[10vh] flex items-center gap-2">
                {["brand identity", "pitch deck"].map((itm, idx) => {
                  return (
                    <button className="px-4 py-2 border border-zinc-900 rounded-full">
                      <h1 className="text-[1vw] uppercase font-semibold">
                        {itm}
                      </h1>
                    </button>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="card-container w-1/2 h-[70vh] relative"
            >
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-[font1] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-9 leading-none tracking-tight text-[10vw] whitespace-nowrap">
                  {"MEDALLIA EXPERIENCE".split("").map((item, idx) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: idx * 0.01,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img className="h-full w-full object-cover" src={img2} alt="" />
              </div>
              <div className="w-full h-[10vh] flex items-center gap-2 ">
                {["conference", "executive keynote", "product launch"].map(
                  (itm, idx) => {
                    return (
                      <button className="px-4 py-2 border border-zinc-900 rounded-full">
                        <h1 className="text-[1vw] uppercase font-semibold">
                          {itm}
                        </h1>
                      </button>
                    );
                  }
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-10 mt-10">
          <div className="w-full flex gap-10">
            <div className="w-1/2 h-[6vh] mt-10 flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-black"></div>
              <h1>AH2 & Matt Horn</h1>
            </div>
            <div className="w-1/2 h-[6vh] mt-10 flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-black"></div>
              <h1>Vise</h1>
            </div>
          </div>
          <div className="card-wrapper w-full flex gap-10">
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="card-container w-1/2 h-[70vh] relative"
            >
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-[font1] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-9 leading-none tracking-tight text-[10vw] whitespace-nowrap">
                {"AH2 & MATT HORN".split("").map((item, idx) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[2]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: idx * 0.01 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="h-full w-full object-cover" src={img3} alt="" />
              </div>

              <div className="button-div w-full h-[10vh] flex items-center gap-2">
                {["pitch deck"].map((itm, idx) => {
                  return (
                    <button className="px-4 py-2 border border-zinc-900 rounded-full">
                      <h1 className="text-[1vw] uppercase font-semibold">
                        {itm}
                      </h1>
                    </button>
                  );
                })}
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="card-container w-1/2 h-[70vh] relative"
            >
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <h1 className="absolute overflow-hidden flex text-[#CDEA68] font-[font1] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-9 leading-none tracking-tight text-[10vw] whitespace-nowrap">
                  {"VISE".split("").map((item, idx) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[3]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: idx * 0.01,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img className="h-full w-full object-cover" src={img4} alt="" />
              </div>
              <div className="w-full h-[10vh] flex items-center gap-2">
                {["agency", "company presentation"].map((itm, idx) => {
                  return (
                    <button className="px-4 py-2 border border-zinc-900 rounded-full">
                      <h1 className="text-[1vw] uppercase font-semibold">
                        {itm}
                      </h1>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
