import React, { useEffect, useState } from "react";
import bgImg from "../assets/Images/Top-Viewbbcbv-1-.jpg";
const Eye = () => {
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
      <div className="eye-wrapper h-screen w-full overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-.3"
          className="h-full w-full bg-center bg-cover relative"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div
            data-scroll
            data-scroll-section
            data-scroll-speed=".09"
            className="absolute flex gap-10 top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%]"
          >
            <div className="h-[15vw] w-[15vw] rounded-full bg-white flex items-center justify-center">
              <div className="h-[10vw] w-[10vw] rounded-full bg-zinc-900 relative">
                <div
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                >
                  {/* pupil */}
                  <div className="absolute top-1/2 left-[75%] -translate-y-1/2">
                    <div className="h-[1.6vw] w-[1.6vw] rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[15vw] w-[15vw] rounded-full bg-white flex items-center justify-center">
              <div className="h-[10vw] w-[10vw] rounded-full bg-zinc-900 relative">
                <div
                  className="absolute top-1/2 left-1/2 w-full h-full"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                >
                  {/* pupil */}
                  <div className="absolute top-1/2 left-[75%] -translate-y-1/2">
                    <div className="h-[1.6vw] w-[1.6vw] rounded-full bg-white"></div>
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

export default Eye;
