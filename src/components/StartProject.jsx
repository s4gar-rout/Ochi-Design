import React, { useEffect, useState } from "react";

const StartProject = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    });
  });
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="0.1"
        className="w-full h-screen bg-[#CDEA68]"
      >
        <div className="pt-25 w-full h-full relative">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-[15vw] leading-[11vw] font-[font1] font-bold ">
              READY
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="text-[15vw] leading-[11vw] font-[font1] font-bold ">
              TO START
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="text-[15vw] leading-[11vw] font-[font1] font-bold ">
              THE PROJECT <span className="font-[font2]">?</span>
            </h1>
          </div>
          <div className="w-full flex justify-center items-center mt-10 flex-col gap-3">
            <button className="px-6 py-4 border rounded-full bg-zinc-800 text-white">
              <h1 className="text-[1vw] uppercase font-semibold">
                start the project
              </h1>
            </button>
            <h1 className="text-[1vw] uppercase font-semibold">or</h1>
            <button className="px-6 py-4 border border-zinc-900 rounded-full">
              <h1 className="text-[1vw] uppercase font-semibold">
                hello@ochi.design
              </h1>
            </button>
          </div>
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed="0.2"
            className="absolute flex gap-10 top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
          >
            <div className="h-[12vw] w-[12vw] rounded-full bg-white flex items-center justify-center">
              <div className="h-[7vw] w-[7vw] rounded-full bg-zinc-900 relative">
                <div
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                >
                  {/* pupil */}
                  <div className="absolute top-1/2 left-[75%] -translate-y-1/2">
                    <div className="h-[1.2vw] w-[1.2vw] rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[12vw] w-[12vw] rounded-full bg-white flex items-center justify-center">
              <div className="h-[7vw] w-[7vw] rounded-full bg-zinc-900 relative">
                <div
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                >
                  {/* pupil */}
                  <div className="absolute top-1/2 left-[75%] -translate-y-1/2">
                    <div className="h-[1.2vw] w-[1.2vw] rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartProject;
